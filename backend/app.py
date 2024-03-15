from flask import Flask, request, jsonify, send_from_directory
import os
import openai
from flask_cors import CORS
import requests
app = Flask(__name__)

@app.route("/")
def root():
    return "<p>Server is running</p>"