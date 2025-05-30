# 🤖 College Enquiry Chatbot

This project is a smart **College Enquiry Chatbot** built using **Google Dialogflow** and **Python Flask**. It automates answers to common student queries related to college admissions, fees, courses, facilities, and more. The chatbot can be easily integrated into a college website or used as a standalone assistant.

---

## 📌 Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [How It Works](#how-it-works)
- [Screenshots](#screenshots)
- [Installation & Deployment](#installation--deployment)
- [My Role in the Project](#my-role-in-the-project)
- [Future Improvements](#future-improvements)
- [License](#license)

---

## 🧠 Overview

The chatbot uses **Dialogflow** to understand user queries through NLP and responds appropriately using predefined intents and training phrases. The **Flask backend** handles user requests and communicates with Dialogflow, while the **frontend (HTML/CSS/JS)** provides a simple chat interface.

---

## 🛠 Tech Stack

| Component       | Technology          |
|----------------|---------------------|
| Frontend       | HTML, CSS, JavaScript |
| Backend        | Python (Flask)      |
| NLP Engine     | Google Dialogflow   |
| Deployment     | Google Cloud App Engine (or Render) |
| API Comm.      | RESTful API (AJAX)  |

---

## ✨ Features

- Automated responses to college-related queries (admissions, courses, contact info, etc.)
- Context-aware follow-up questions using Dialogflow
- Simple and clean frontend chat interface
- Easy backend integration using Flask
- Deployable on cloud platforms (Google Cloud App Engine)

---

## ⚙️ How It Works

1. User types a question on the chatbot interface.
2. The frontend sends the question to the Flask backend.
3. Flask sends this query to Dialogflow using its SDK.
4. Dialogflow returns a response based on the matched intent.
5. Flask sends the response back to the frontend.
6. The user sees the answer in the chatbot window.

---

## 🖼 Screenshots

> _📸 Add screenshots of your frontend interface, Dialogflow agent, and cloud deployment here._

```bash
[ Add screenshots like this: ]

📍 Chatbot UI  
📍 Dialogflow Intents Setup  
📍 Response from Dialogflow  
📍 Hosted Web App on Google Cloud
```

---

## 👩‍💻 My Role in the Project

- 🛠 **Full-Stack Developer**
    - Built the complete backend using **Flask** to handle chat requests.
    - Integrated the chatbot with **Dialogflow** using `google-cloud-dialogflow` SDK.
    - Designed the frontend with **HTML/CSS/JavaScript** to enable real-time chatting.
    - Configured cloud deployment using **Google App Engine** and **environment variables** securely.
    - Trained Dialogflow agent with **multiple intents**, **entities**, and **contexts** for dynamic responses.
    - Wrote fallback and follow-up intent logic to maintain conversation flow.

---

## 🚀 Installation & Deployment

### ✅ Prerequisites
- Python 3.11+
- Google Cloud account
- Google Cloud project with Dialogflow API enabled
- `my-chatbot-key.json` (service account credentials)

### 🔧 Local Setup

```bash
# Clone the repo
git clone https://github.com/yourusername/college-enquiry-chatbot.git
cd college-enquiry-chatbot

# Create virtual environment
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Set GOOGLE_APPLICATION_CREDENTIALS as a JSON string (or use file method)
export GOOGLE_APPLICATION_CREDENTIALS='PASTE_YOUR_JSON_STRING_HERE'

# Run Flask app
python app.py
```

### ☁️ Deployment (Google App Engine)

```bash
# Install Google Cloud SDK and login
gcloud init

# Create App Engine instance
gcloud app create --region=us-central

# Deploy the app
gcloud app deploy

# Open in browser
gcloud app browse
```

---

## 🔮 Future Improvements

- ✅ Improve UI/UX using React or Bootstrap.
- ✅ Add multilingual support.
- ✅ Store chat logs in a database.
- ✅ Use voice input/output.
- ✅ Integrate with the official college website.
- ✅ Handle authentication for student-specific queries.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

> 🔗 For queries or feedback, feel free to contact me via GitHub or email.

