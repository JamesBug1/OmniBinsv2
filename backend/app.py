from flask import Flask, request, jsonify
from flask_cors import CORS
import firebase_admin
from firebase_admin import credentials, firestore, db as realtime_db, auth
import os

app = Flask(__name__)
CORS(app)  # Enable CORS for frontend communication

# Initialize Firebase with Authentication and Realtime Database
cred = credentials.Certificate("serviceAccountKey.json")
firebase_admin.initialize_app(cred, {
    "databaseURL": "https://omnibins-default-rtdb.firebaseio.com/"
})
realtime_db_ref = realtime_db.reference("/")

# If you prefer Firestore instead, use:
# firebase_admin.initialize_app(cred)
# db = firestore.client()

def verify_token(token):
    """Verify Firebase Auth ID token"""
    try:
        decoded_token = auth.verify_id_token(token)
        return decoded_token
    except Exception as e:
        return None

def require_auth(f):
    """Decorator to require authentication"""
    def wrapper(*args, **kwargs):
        auth_header = request.headers.get('Authorization')
        if not auth_header or not auth_header.startswith('Bearer '):
            return jsonify({"error": "Authorization header required"}), 401

        token = auth_header.split(' ')[1]
        user = verify_token(token)
        if not user:
            return jsonify({"error": "Invalid token"}), 401

        # Add user to request context
        request.user = user
        return f(*args, **kwargs)
    wrapper.__name__ = f.__name__
    return wrapper

@app.route('/')
def hello():
    return jsonify({"message": "Welcome to OmniBins Backend"})

@app.route('/bins', methods=['GET'])
@require_auth
def get_bins():
    """Protected bin data endpoint"""
    try:
        bins = realtime_db_ref.child('bins').get() or {}
        return jsonify(bins)
    except Exception as e:
        return jsonify({"error": "Failed to fetch bins", "details": str(e)}), 500

@app.route('/users', methods=['GET'])
@require_auth
def get_users():
    """Get authenticated user's profile or admin user list"""
    user = request.user

    try:
        # Get user data from database
        user_data = realtime_db_ref.child('users').child(user.get('uid')).get()
        if user_data:
            return jsonify({
                "current_user": {
                    "uid": user.get('uid'),
                    "email": user.get('email'),
                    "role": user_data.get('role', 'user'),
                    "name": user_data.get('name', ''),
                    "created_at": user_data.get('created_at', '')
                }
            })
        else:
            # User doesn't exist in database, create basic profile
            return jsonify({
                "current_user": {
                    "uid": user.get('uid'),
                    "email": user.get('email'),
                    "role": "user",
                    "name": "",
                    "created_at": ""
                }
            })
    except Exception as e:
        return jsonify({"error": "Failed to fetch user data", "details": str(e)}), 500

@app.route('/users/profile', methods=['GET'])
@require_auth
def get_user_profile():
    """Get current user's profile"""
    user = request.user
    return jsonify({
        "uid": user.get('uid'),
        "email": user.get('email'),
        "email_verified": user.get('email_verified', False)
    })

@app.route('/users', methods=['POST'])
@require_auth
def create_user():
    data = request.json
    user = request.user

    if not data:
        return jsonify({"error": "No data provided"}), 400

    required_fields = ['name', 'email', 'team']
    for field in required_fields:
        if field not in data:
            return jsonify({"error": f"Missing required field: {field}"}), 400

    try:
        # Create user data structure
        user_data = {
            "name": data['name'],
            "email": data['email'],
            "phone": data.get('phone', ''),
            "team": data['team'],
            "role": data.get('role', 'staff'),
            "status": "active",
            "created_at": {".sv": "timestamp"},
            "created_by": user.get('uid')
        }

        # Save to Realtime Database
        new_ref = realtime_db_ref.child('users').push(user_data)
        return jsonify({
            "message": "User created successfully",
            "id": new_ref.key,
            "data": user_data
        }), 201
    except Exception as e:
        return jsonify({"error": "Failed to create user", "details": str(e)}), 500

@app.route('/bins', methods=['POST'])
@require_auth
def create_bin():
    data = request.json
    user = request.user

    if not data:
        return jsonify({"error": "No data provided"}), 400

    required_fields = ['id', 'location', 'capacity']
    for field in required_fields:
        if field not in data:
            return jsonify({"error": f"Missing required field: {field}"}), 400

    try:
        # Create bin data structure
        bin_data = {
            "id": data['id'],
            "location": data['location'],
            "capacity": data['capacity'],
            "current_fill": 0,
            "status": data.get('status', 'empty'),
            "created_at": {".sv": "timestamp"},
            "created_by": user.get('uid')
        }

        # Save to Realtime Database
        new_ref = realtime_db_ref.child('bins').child(data['id'])
        new_ref.set(bin_data)
        return jsonify({
            "message": "Bin created successfully",
            "id": data['id'],
            "data": bin_data
        }), 201
    except Exception as e:
        return jsonify({"error": "Failed to create bin", "details": str(e)}), 500

@app.route('/teams', methods=['POST'])
@require_auth
def create_team():
    data = request.json
    user = request.user

    if not data:
        return jsonify({"error": "No data provided"}), 400

    required_fields = ['name', 'workerIds']
    for field in required_fields:
        if field not in data:
            return jsonify({"error": f"Missing required field: {field}"}), 400

    try:
        # Create team data structure
        team_data = {
            "name": data['name'],
            "worker_ids": data['workerIds'],
            "created_at": {".sv": "timestamp"},
            "created_by": user.get('uid')
        }

        # Save to Realtime Database
        new_ref = realtime_db_ref.child('teams').push(team_data)
        return jsonify({
            "message": "Team created successfully",
            "id": new_ref.key,
            "data": team_data
        }), 201
    except Exception as e:
        return jsonify({"error": "Failed to create team", "details": str(e)}), 500

@app.route('/teams', methods=['GET'])
@require_auth
def get_teams():
    try:
        teams = realtime_db_ref.child('teams').get() or {}
        return jsonify(teams)
    except Exception as e:
        return jsonify({"error": "Failed to fetch teams", "details": str(e)}), 500

@app.route('/login', methods=['POST'])
def login():
    """This endpoint is for development/testing only.
    In production, authentication happens on the frontend with Firebase Auth SDK.
    Frontend sends the ID token to protected endpoints."""
    return jsonify({
        "message": "Use Firebase Auth SDK on frontend. Send Bearer token to protected routes.",
        "example": "Authorization: Bearer <firebase_id_token>"
    })

@app.route('/verify-token', methods=['POST'])
def verify_token_endpoint():
    """Verify Firebase Auth token (for testing)"""
    data = request.json or {}
    token = data.get('token')

    if not token:
        return jsonify({"error": "Token required"}), 400

    user = verify_token(token)
    if user:
        return jsonify({
            "valid": True,
            "user": {
                "uid": user.get('uid'),
                "email": user.get('email'),
                "email_verified": user.get('email_verified', False)
            }
        })
    else:
        return jsonify({"valid": False, "error": "Invalid token"}), 401

@app.route('/bins/<int:bin_id>', methods=['GET'])
@require_auth
def get_bin(bin_id):
    try:
        bin_data = realtime_db_ref.child('bins').child(str(bin_id)).get()
        if bin_data:
            return jsonify(bin_data)
        else:
            return jsonify({"error": "Bin not found"}), 404
    except Exception as e:
        return jsonify({"error": "Failed to fetch bin", "details": str(e)}), 500

@app.route('/collections', methods=['POST'])
@require_auth
def add_collection():
    data = request.json
    user = request.user

    if not data:
        return jsonify({"error": "No data provided"}), 400

    try:
        # Add user ID and timestamp to collection data
        collection_data = {
            **data,
            "user_id": user.get('uid'),
            "created_at": {".sv": "timestamp"}  # Firebase server timestamp
        }

        # Save to Realtime Database
        new_ref = realtime_db_ref.child('collections').push(collection_data)
        return jsonify({"message": "Collection added", "id": new_ref.key, "data": collection_data}), 201
    except Exception as e:
        return jsonify({"error": "Failed to add collection", "details": str(e)}), 500

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    app.run(debug=True, port=port)