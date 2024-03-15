from flask import Flask, request, jsonify, send_from_directory
import os
import openai
from flask_cors import CORS
import requests

app = Flask(__name__, static_folder='build', static_url_path='')
CORS(app, origins='https://apiapp-cc9a10623c7c.herokuapp.com')


@app.route('/generate-flashcards', methods=['POST'])
def generate_flashcards():

    # Just return a static response for testing
    return jsonify(["Flashcard 1", "Flashcard 2", "Flashcard 3"])

# if __name__ == "__main__":
#     app.run(debug=True)
    
# def generate_flashcards():
#     data = request.json
#     subject = data.get('subject', '')

#     headers = {
#         'Ocp-Apim-Subscription-Key': os.getenv("AZURE_OPENAI_KEY"),
#         'Content-Type': 'application/json'
#     }

#     azure_endpoint = os.getenv("AZURE_OPENAI_ENDPOINT")
#     model = "davinci"  # Specify the model you want to use

#     payload = {
#         "prompt": f"Generate flashcards for the topic: {subject}",
#         "max_tokens": 150,
#         "model": model
#     }

#     response = requests.post(f"{azure_endpoint}/completions", headers=headers, json=payload)

#     if response.status_code == 200:
#         flashcards = response.json().get('choices', [])[0].get('text', '').strip().split('\n')
#         return jsonify(flashcards)
#     else:
#         return jsonify({"error": "Failed to generate flashcards"}), response.status_code


# Route to serve the React application
@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve(path):
    if path != "" and os.path.exists(app.static_folder + '/' + path):
        return send_from_directory(app.static_folder, path)
    else:
        return send_from_directory(app.static_folder, 'index.html')

if __name__ == "__main__":
    app.run(debug=True)
