from sqlalchemy import text
from database.db import engine

def save_interaction(data):

    query = text("""
        INSERT INTO interactions (hcp_name, topics, sentiment, follow_up, summary)
        VALUES (:hcp_name, :topics, :sentiment, :follow_up, :summary)
    """)

    with engine.connect() as conn:
        conn.execute(query, data)
        conn.commit()