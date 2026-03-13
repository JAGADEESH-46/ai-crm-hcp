# AI-First CRM – HCP Interaction Module

## Overview

This project implements an **AI-First CRM module for Healthcare Professional (HCP) interactions**.
It enables pharmaceutical field representatives to log interactions with doctors using either:

• A structured form
• A conversational AI assistant

The system leverages **LangGraph agents and LLMs** to summarize, extract insights, and automate interaction logging.

---

# Tech Stack

### Frontend

* React.js
* Redux (State Management)
* Google Inter Font

### Backend

* Python
* FastAPI

### AI Layer

* LangGraph Agent Framework
* Groq LLM API

  * gemma2-9b-it
  * llama-3.3-70b-versatile

### Database

* PostgreSQL / MySQL

---

# Key Features

### 1. Log Interaction Screen

Users can log interactions with healthcare professionals through:

* Structured interaction form
* Conversational AI assistant

### 2. AI Assistant

The AI assistant helps:

* Summarize conversations
* Extract entities (doctor name, products discussed)
* Suggest follow-ups

---

# LangGraph Agent Tools

### 1. Log Interaction Tool

Captures HCP interaction data from structured form or chat and stores it in the database.

### 2. Edit Interaction Tool

Allows users to modify or update previously logged interaction details.

### 3. Summarize Interaction Tool

Uses the LLM to generate summaries from raw notes or voice transcripts.

### 4. Suggest Follow-Up Tool

Provides recommendations for next engagement steps with the HCP.

### 5. Retrieve HCP Interaction History

Fetches previous interactions with the same HCP.

---

# Project Structure

ai-crm-hcp/
│
├── backend
│   ├── agents
│   ├── routes
│   ├── database
│   └── main.py
│
├── frontend
│   ├── public
│   ├── src
│   └── package.json
│
└── README.md

---

# Running the Project

## Backend

cd backend
pip install -r requirements.txt
uvicorn main:app --reload

Backend runs on:

http://localhost:8000

---

## Frontend

cd frontend
npm install
npm start

Frontend runs on:

http://localhost:3000

---

# AI Workflow

1. User logs interaction using form or chat.
2. LangGraph agent processes the interaction.
3. LLM extracts key details and summarizes notes.
4. Data is stored in the database.
5. AI suggests follow-up actions.

---

# Future Improvements

* Voice interaction logging
* AI sentiment analysis for HCP feedback
* Advanced CRM analytics dashboard
