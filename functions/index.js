const { initializeApp } = require('firebase-admin/app');
const { getDatabase } = require('firebase-admin/database');
const { onSchedule } = require('firebase-functions/v2/scheduler');
const { logger } = require('firebase-functions');

initializeApp();

const databaseUrl = 'https://omnibins-default-rtdb.firebaseio.com';
const scheduleRefPath = 'weeklyCollectionSchedules';
const dayMs = 24 * 60 * 60 * 1000;

function dateKey(date) {
  return date.toISOString().slice(0, 10);
}

function makeTask(schedule, date, scheduleId) {
  const taskId = `weekly-${scheduleId}-${dateKey(date)}`;
  const createdAt = new Date().toISOString();
  return {
    id: taskId,
    type: 'collection',
    binId: schedule.binId,
    bin: schedule.binId,
    node: schedule.binId,
    assignedTo: schedule.assignedTo,
    ...(schedule.assignedUserId
      ? {
          assignedUserId: schedule.assignedUserId,
          assignedUserName: schedule.assignedUserName,
          assignedUserEmail: schedule.assignedUserEmail || '',
        }
      : { assignedTeam: schedule.assignedTeam }),
    scheduledDate: dateKey(date),
    scheduledTime: dateKey(date),
    description: schedule.description || '',
    status: 'pending',
    recurrence: 'weekly',
    scheduleId,
    createdAt,
  };
}

exports.createWeeklyCollectionTasks = onSchedule(
  {
    schedule: 'every day 00:00',
    timeZone: 'UTC',
    region: 'us-central1',
    retryCount: 3,
  },
  async () => {
    const database = getDatabase(undefined, databaseUrl);
    const schedulesSnapshot = await database.ref(scheduleRefPath).get();
    const schedules = schedulesSnapshot.val() || {};
    const now = new Date();
    const updates = {};

    for (const [scheduleId, schedule] of Object.entries(schedules)) {
      if (!schedule || schedule.active !== true) continue;

      const nextDate = new Date(`${schedule.nextRunDate}T00:00:00.000Z`);
      if (!Number.isFinite(nextDate.getTime()) || nextDate > now) continue;

      const previousTaskId = schedule.lastTaskId;
      if (previousTaskId) {
        const previousTaskSnapshot = await database.ref(`tasks/${previousTaskId}/status`).get();
        if (String(previousTaskSnapshot.val() ?? '').toLowerCase() !== 'completed') continue;
      }

      const task = makeTask(schedule, nextDate, scheduleId);
      updates[`tasks/${task.id}`] = task;
      updates[`collections/${task.id}`] = task;
      updates[`bins/${schedule.binId}/collectionScheduledDate`] = task.scheduledDate;
      updates[`${scheduleRefPath}/${scheduleId}/nextRunDate`] = dateKey(new Date(nextDate.getTime() + 7 * dayMs));
      updates[`${scheduleRefPath}/${scheduleId}/lastTaskId`] = task.id;
    }

    if (Object.keys(updates).length > 0) {
      await database.ref().update(updates);
      logger.info('Created weekly collection tasks', { count: Object.keys(updates).length / 5 });
    }
  }
);
