# 🤖 College Enquiry Chatbot

This project is a smart **College Enquiry Chatbot** built using **Google Dialogflow** and **Python Flask**. It automates answers to common student queries related to college admissions, fees, courses, facilities, and more. The chatbot can be easily integrated into a college website or used as a standalone assistant.

---

## 📌 Table of Contents

- [Overview](#-overview)
- [Tech Stack](#-tech-stack)
- [Features](#-features)
- [How It Works](#-how-it-works)
- [Screenshots](#-screenshots)
- [Installation & Deployment](#-installation--deployment)
- [My Role in the Project](#-my-role-in-the-project)
- [Roadmap or Improvements](#-roadmap-or-improvements)
- [License](#-license)

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
| Deployment     | Railway |
| API Communication  | Dialogflow <-> Flask (via HTTP requests)  |

---

## ✨ Features

- Automated responses to college-related queries (admissions, courses, contact info, etc.)
- Context-aware follow-up questions using Dialogflow
- Simple and clean frontend chat interface
- Easy backend integration using Flask
- Deployable on cloud platforms like Google Cloud App Engine or Railway.

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


![Chatbot UI](https://github.com/user-attachments/assets/b053b297-fdd3-475b-bed6-c0177d1e72f8)

![Dialogflow Intents Setup](https://github.com/user-attachments/assets/1995489b-a5d5-424b-a18f-bf2b0172284a) 
 
![Hosted Web App on railway](https://github.com/user-attachments/assets/b0a0542d-11b2-4fc1-b98d-2d3e1d30f997)


---

## 👩‍💻 My Role in the Project

- 🛠 **Back-end Developer**
    - Built the complete backend using **Flask** to handle chat requests.
    - Integrated the chatbot with **Dialogflow** using `google-cloud-dialogflow` SDK.
    - Configured cloud deployment using **Railway.app** and **environment variables** securely.
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

### Dialogflow Key Setup
Store your service account JSON content in a secure environment variable:
GOOGLE_APPLICATION_CREDENTIALS = <paste JSON content here securely as an env variable>

# Run Flask app
python app.py
```

## 🚀 Roadmap 0r Improvements
> - Enhancing front-end UI for a more user-friendly experience.
> - Expanding query coverage with follow-up intents.
> - Integration with a full-featured college website.
> - Adding voice input capabilities.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

> 🔗 For queries or feedback, feel free to contact me via GitHub or email.

