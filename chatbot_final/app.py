from flask import Flask, render_template, request, jsonify
from google.cloud import dialogflow_v2 as dialogflow
import os

app = Flask(__name__)

# Set path to service account key (make sure this exists)
os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = "my-chatbot-key.json"

# Define your Dialogflow project ID
PROJECT_ID = "collegeenquirybot-tgmk"

def detect_intent(session_id, text):
    """Send user text to Dialogflow and get a response."""
    session_client = dialogflow.SessionsClient()
    session = session_client.session_path(PROJECT_ID, session_id)

    text_input = dialogflow.types.TextInput(text=text, language_code="en")
    query_input = dialogflow.types.QueryInput(text=text_input)

    response = session_client.detect_intent(session=session, query_input=query_input)
    return response.query_result.fulfillment_text

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/favicon.ico")
def favicon():
    return '', 204

@app.route("/chatbot", methods=["POST"])
def chatbot():
    try:
        data = request.get_json(force=True)
        if not data or "text" not in data:
            return jsonify({"error": "Missing 'text' field in request"}), 400

        session_id = data.get("session_id", "default_session")
        user_input = data["text"]

        bot_response = detect_intent(session_id, user_input)
        return jsonify({"response": bot_response})
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(debug=True)
