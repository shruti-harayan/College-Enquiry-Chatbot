from flask import Flask, render_template, request, jsonify
from google.cloud import dialogflow
import os,json
from google.oauth2 import service_account 

app = Flask(__name__)
# Path to store the credentials file temporarily
CREDENTIALS_PATH = "/tmp/my-chatbot-key.json"  # /tmp is writable in Render

# Read the JSON from the environment variable
json_str = os.getenv("GOOGLE_APPLICATION_CREDENTIALS")

if json_str is None:
    raise RuntimeError("GOOGLE_APPLICATION_CREDENTIALS is not set in the environment.")

# Write JSON string to a temporary file
with open(CREDENTIALS_PATH, "w") as f:
    f.write(json_str)

# Set GOOGLE_APPLICATION_CREDENTIALS to the file path
os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = CREDENTIALS_PATH

# Create credentials from the JSON
credentials = service_account.Credentials.from_service_account_file(CREDENTIALS_PATH)

def detect_intent(session_id, text):
    """Send user text to Dialogflow and get a response."""
    project_id = "collegeenquirybot-tgmk"  # Replace with your actual Dialogflow project ID
    session_client = dialogflow.SessionsClient()

    session = session_client.session_path(project_id, session_id)
    text_input = dialogflow.TextInput(text=text, language_code="en")
    query_input = dialogflow.QueryInput(text=text_input)

    response = session_client.detect_intent(session=session, query_input=query_input)
    
    return response.query_result.fulfillment_text  

@app.route("/")
def home():
    return render_template("index.html")

@app.route('/favicon.ico')
def favicon():
    return '', 204

@app.route("/chatbot", methods=["POST"])
def chatbot():
    """Handle chatbot requests."""
    try:
        data = request.get_json(force=True)
        if not data or "text" not in data:
            return jsonify({"error": "Missing 'text' field in request"}), 400

        session_id = data.get("session_id", "default_session")
        text = data["text"]

        response = detect_intent(session_id, text)  
        return jsonify({"response": response})  
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(debug=True)
