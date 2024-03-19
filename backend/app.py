from flask import Flask, request, jsonify, send_from_directory
import os
import openai
from flask_cors import CORS
import requests
from firebase_admin import credentials, firestore, auth, initialize_app

app = Flask(__name__)

# initialize the Firebase SDK
cred = credentials.Certificate('key.json')
app = firebase_admin.initialize_app(cred)
db = firestore.client()


# Will split these routes up eventually via blueprints
@app.route('/')
def root():
    return "<p>Server is running</p>"

@app.route('/flashcard', methods=('GET', 'POST'))
def flashcard():
    if request.method == 'POST':
        # TODO - implement flashcard creation via this route
        return 'Implement flashcard creation here'
    else:
        # TODO - implement flashcard retrival via this route
        return 'Implement flashcard retrival here' 