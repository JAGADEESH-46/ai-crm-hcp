import React, { useState } from "react";

function InteractionForm() {
  const [formData, setFormData] = useState({
    hcpName: "",
    interactionType: "",
    date: "",
    time: "",
    discussion: "",
    sentiment: "",
    followUp: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Interaction Logged:", formData);
  };

  return (
    <div style={{ padding: "20px", width: "60%" }}>
      <h2>Log HCP Interaction</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="hcpName"
          placeholder="HCP Name"
          value={formData.hcpName}
          onChange={handleChange}
        />

        <br /><br />

        <select
          name="interactionType"
          value={formData.interactionType}
          onChange={handleChange}
        >
          <option value="">Interaction Type</option>
          <option value="meeting">Meeting</option>
          <option value="call">Call</option>
          <option value="email">Email</option>
        </select>

        <br /><br />

        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
        />

        <br /><br />

        <input
          type="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
        />

        <br /><br />

        <textarea
          name="discussion"
          placeholder="Topics Discussed"
          value={formData.discussion}
          onChange={handleChange}
        />

        <br /><br />

        <select
          name="sentiment"
          value={formData.sentiment}
          onChange={handleChange}
        >
          <option value="">Sentiment</option>
          <option value="positive">Positive</option>
          <option value="neutral">Neutral</option>
          <option value="negative">Negative</option>
        </select>

        <br /><br />

        <textarea
          name="followUp"
          placeholder="Follow-up Actions"
          value={formData.followUp}
          onChange={handleChange}
        />

        <br /><br />

        <button type="submit">Log Interaction</button>

      </form>
    </div>
  );
}

export default InteractionForm;