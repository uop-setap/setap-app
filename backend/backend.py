from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/generate-flashcards', methods=['POST'])
def generate_flashcards():
    data = request.json
    subject = data.get('subject', '')
    
    # Here you will integrate with Azure OpenAI to generate flashcards
    flashcards = ["Flashcard 1", "Flashcard 2"]  # Placeholder response

    return jsonify(flashcards)

if __name__ == "__main__":
    app.run(debug=True)
