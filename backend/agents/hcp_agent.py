from database.save_interaction import save_interaction
import json
import os
from dotenv import load_dotenv
from langchain.tools import tool
from groq import Groq

# load environment variables
load_dotenv() 

api_key = os.getenv("GROQ_API_KEY")

if not api_key:
    raise ValueError("GROQ_API_KEY not found. Check your .env file.") 

client = Groq(api_key=api_key)


@tool
def log_interaction(interaction_text: str):
    """
    Extract structured interaction data from conversation text.
    """

    prompt = f"""
    Extract the following CRM interaction details from this text:

    - HCP Name
    - Discussion Topics
    - Sentiment (positive, neutral, negative)
    - Follow-up actions
    - Summary

    Interaction text:
    {interaction_text}

    Return the result in JSON format.
    """

    response = client.chat.completions.create(
        model="llama-3.3-70b-versatile",
        messages=[
            {"role": "user", "content": prompt}
        ],
    )

    return response.choices[0].message.content
    result = result.replace("```json", "").replace("```", "").strip()
    data = json.loads(result)

    save_interaction({
        "hcp_name": data.get("HCP Name"),
        "topics": data.get("Discussion Topics"),
        "sentiment": data.get("Sentiment"),
        "follow_up": data.get("Follow-up"),
        "summary": data.get("Summary")
})

    return data

# TOOL 2 — Edit Interaction
@tool
def edit_interaction(interaction_id: int, updated_text: str):
    """
    Edit existing interaction.
    """
    return {
        "interaction_id": interaction_id,
        "updated_text": updated_text,
        "status": "Interaction updated"
    }


# TOOL 3 — Summarize Meeting
@tool
def summarize_meeting(text: str):
    """
    Summarize meeting notes.
    """
    return {
        "summary": text[:100]
    }


# TOOL 4 — Suggest Follow-up
@tool
def suggest_followup(topic: str):
    """
    Suggest follow-up action.
    """
    return {
        "suggestion": f"Schedule follow-up meeting regarding {topic}"
    }


# TOOL 5 — HCP Insights
@tool
def hcp_insights(hcp_name: str):
    """
    Provide insights about HCP engagement.
    """
    return {
        "hcp": hcp_name,
        "insight": "Doctor shows interest in cardiovascular products"
    }