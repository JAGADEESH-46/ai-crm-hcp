from fastapi import APIRouter
from agents.hcp_agent import log_interaction

router = APIRouter()

@router.post("/log-interaction")
def log_interaction_api(data: dict):

    text = data.get("text")

    result = log_interaction.invoke(text)

    return {
        "status": "success",
        "result": result
    }