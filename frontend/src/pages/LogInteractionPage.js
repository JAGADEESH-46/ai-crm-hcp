import React from "react";
import InteractionForm from "../components/InteractionForm";
import ChatAssistant from "../components/ChatAssistant";

function LogInteractionPage() {
  return (
    <div style={{ display: "flex", fontFamily: "Inter, sans-serif" }}>
      
      {/* Left Side Form */}
      <InteractionForm />

      {/* Right Side AI Assistant */}
      <ChatAssistant />

    </div>
  );
}

export default LogInteractionPage;