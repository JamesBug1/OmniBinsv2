#!/usr/bin/env python3
"""
Set a user's role in the Realtime Database by email.

Usage: python set_user_role.py <email> <role>
Example: python set_user_role.py guesswhoami.true@gmail.com admin
"""
import sys
import os
import firebase_admin
from firebase_admin import credentials, db

def main():
    if len(sys.argv) < 3:
        print("Usage: python set_user_role.py <email> <role>")
        return
    email = sys.argv[1]
    role = sys.argv[2]

    key_path = os.path.join(os.path.dirname(__file__), 'serviceAccountKey.json')
    cred = credentials.Certificate(key_path)
    try:
        app = firebase_admin.get_app()
    except ValueError:
        app = firebase_admin.initialize_app(cred, {
            'databaseURL': 'https://omnibins-default-rtdb.firebaseio.com'
        })

    ref = db.reference('users')
    users = ref.get() or {}

    found = False
    for key, value in users.items():
        if isinstance(value, dict) and value.get('email') == email:
            print(f'Found user key={key}, current role={value.get("role")}')
            ref.child(key).update({'role': role})
            print(f'Updated role -> {role}')
            found = True
    if not found:
        print('No user found with that email.')

if __name__ == '__main__':
    main()
