from flask import Flask, send_from_directory, request, jsonify, session
import os
import json

app = Flask(__name__)
app.secret_key = 'Supersecretkey'

USERS_FILE = 'users.json'


def load_users():
    if os.path.exists(USERS_FILE):
        with open(USERS_FILE, 'r') as f:
            return json.load(f)
    return {}

def save_users(users):
    with open(USERS_FILE, 'w') as f:
        json.dump(users, f)

@app.route('/')
def home():
    return send_from_directory('static/index', 'index.html')

@app.route('/<path:filename>')
def serve_static(filename):
    return send_from_directory(f'static/{filename}', f'{filename}.html')



@app.route('/api/login', methods=['POST'])
def login():
    data = request.get_json()

    username = data.get('username', '').strip()
    password = data.get('password', '').strip()

    users = load_users()

    session['username'] = username
    return jsonify({'success': True, 'message': 'Login successful'})

@app.route('/api/register', methods=['POST'])
def register():
    data = request.get_json()
    username = data.get('username', '').strip()
    password = data.get('password', '').strip()

    users = load_users()
    if username in users:
        return jsonify({'success': False, 'message': 'Username already exists'}), 400

    users[username] = password
    save_users(users)

    return jsonify({'success': True, 'message': users})



if __name__ == '__main__':
    app.run(use_reloader=True, host='127.0.0.1', port=3000)