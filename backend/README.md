# OmniBins Backend

This is the Python backend for the OmniBins waste management application.

## Setup

1. Install Python 3.8 or higher.
2. Install dependencies:
   ```
   pip install -r requirements.txt
   ```

## Firebase Integration

✅ **Firebase is now fully integrated!**

- **Authentication**: Firebase Auth (email/password + Google) is active
- **Database**: Realtime Database at `https://omnibins-default-rtdb.firebaseio.com/`
- **Service Account**: `serviceAccountKey.json` is configured
- **Backend**: All routes now use Firebase services

### Database Structure

Your Realtime Database should have this structure:

```json
{
  "bins": {
    "1": {
      "id": 1,
      "location": "Location A",
      "status": "full",
      "capacity": 100
    }
  },
  "collections": {
    "-Nabc123": {
      "bin_id": 1,
      "user_id": "firebase_uid",
      "timestamp": 1640995200,
      "waste_type": "plastic",
      "quantity": 50
    }
  },
  "users": {
    "firebase_uid": {
      "email": "user@example.com",
      "role": "user",
      "name": "John Doe",
      "created_at": "2024-01-01"
    }
  }
}
```

### Authentication Flow

1. User signs in with email/password or Google on frontend
2. Get ID token: `const token = await user.getIdToken()`
3. Send token in Authorization header: `Authorization: Bearer ${token}`

### API Endpoints

**Public:**
- `GET /` - Welcome message
- `POST /login` - Info about auth flow
- `POST /verify-token` - Test token verification

**Protected (require Bearer token):**
- `GET /bins` - Get bin data
- `GET /users` - Get current user profile
- `GET /users/profile` - Get detailed user profile
- `GET /bins/<id>` - Get specific bin
- `POST /collections` - Add collection data

### Notes

- Realtime Database is different from Firestore. If you want to use Firestore later, keep the current `firebase_admin` package and switch the initialization to `firestore.client()`.
- For now, the backend contains placeholder data until you enable Realtime Database and uncomment the initialization code.

## Running the Server

```
cd backend
source venv/bin/activate
PORT=5002 python app.py
```

The server will run on http://localhost:5002 (Firebase-enabled)

## API Endpoints

**Public:**
- `GET /` - Welcome message
- `POST /login` - Info about auth flow
- `POST /verify-token` - Test token verification

**Protected (require Bearer token):**
- `GET /bins` - Get bin data
- `GET /users` - Get current user profile
- `GET /users/profile` - Get detailed user profile
- `GET /bins/<id>` - Get specific bin
- `POST /collections` - Add collection data

## Connecting to Frontend

The frontend can make requests to http://localhost:5000/api/... (adjust as needed).