from flask import Flask, request, jsonify, send_from_directory
import os
import openai
from flask_cors import CORS
import requests
from firebase_admin import credentials, firestore, auth, initialize_app

app = Flask(__name__)

# initialize the Firebase SDK
default_app = firebase_admin.initialize_app()

@app.route("/")
def root():
    return "<p>Server is running</p>"