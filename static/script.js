document.getElementById("send").addEventListener("click", async function () {
    const userInput = document.getElementById("userInput").value;
    if (!userInput) return; // Prevent empty messages

    const chatbox = document.getElementById("chatbox");

    chatbox.innerHTML += `<p class="user-msg"><strong>You:</strong> ${userInput}</p>`;

    const response = await fetch("http://127.0.0.1:5000/chatbot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: userInput })
    });

    const data = await response.json();  // Convert response to JSON

    if (data.response) {
        chatbox.innerHTML += `<p class="bot-msg"><strong>Bot:</strong> ${data.response}</p>`;
    } else {
        chatbox.innerHTML += `<p class="bot-msg"><strong>Bot:</strong> Error processing request</p>`;
    }

    document.getElementById("userInput").value = ""; // Clear input field after sending
});

document.getElementById("userInput").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {  
        document.getElementById("send").click();  
    }
});
