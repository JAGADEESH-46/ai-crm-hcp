import React, { useState } from "react";
import axios from "axios";

function ChatAssistant() {

  const [message, setMessage] = useState("");
  const [chatHistory, setChatHistory] = useState([]);

  const handleSend = async () => {

    if (!message) return;

    try {

      const response = await axios.post(
        "http://127.0.0.1:8000/ai/log-interaction",
        { text: message }
      );

      const aiReply = response.data.result;

      setChatHistory([
        ...chatHistory,
        {
          user: message,
          ai: JSON.stringify(aiReply, null, 2)
        }
      ]);

      setMessage("");

    } catch (error) {
      console.error("API error:", error);
    }

  };

  return (
    <div style={{ padding: "20px", width: "40%" }}>

      <h3>AI Assistant</h3>

      {/* Chat Messages */}
      <div style={{ minHeight: "200px", marginBottom: "10px" }}>
        {chatHistory.map((chat, index) => (
          <div key={index}>
            <p><b>You:</b> {chat.user}</p>
            <pre><b>AI:</b> {chat.ai}</pre>
          </div>
        ))}
      </div>

      {/* Input */}
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Describe interaction..."
      />

      <button onClick={handleSend}>Send</button>

    </div>
  );
}

export default ChatAssistant;