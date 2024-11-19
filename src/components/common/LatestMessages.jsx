import React, { useState, useEffect } from "react";
import axios from "axios";
import { List, ListItem, ListItemText, Typography, Paper } from "@mui/material";

const LatestMessages = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMessages = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(
        "https://us-central1-stakepool247-app.cloudfunctions.net/getKoiosData"
      );
      setMessages(response.data.messages);
    } catch (err) {
      console.error("Error fetching messages:", err);
      setError("Failed to load messages. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  const formatDateToLocal = (blockTime) => {
    if (!blockTime) return "Unknown Date";
    const date = new Date(blockTime * 1000); // Convert Unix timestamp to milliseconds
    return date.toLocaleString(undefined, {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false, // Use 24-hour format
    });
  };

  return (
    <Paper style={{ padding: "20px", margin: "20px" }}>
      <Typography variant="h4" gutterBottom>
        Latest Messages (From transaction message/comment metadata)
      </Typography>
      {loading && <Typography>Loading messages...</Typography>}
      {error && <Typography color="error">{error}</Typography>}
      {messages.length > 0 ? (
        <List>
          {messages.map((msg, index) => (
            <ListItem
              key={index}
              style={{
                backgroundColor: index % 2 === 0 ? "#f9f9f9" : "#ffffff",
                borderRadius: "4px",
                marginBottom: "5px",
              }}
            >
              <ListItemText
                primary={
                  <Typography variant="body1">
                    <strong>[{formatDateToLocal(msg.blockTime)}]</strong>: {msg.message}
                  </Typography>
                }
              />
            </ListItem>
          ))}
        </List>
      ) : (
        !loading && <Typography>No messages found.</Typography>
      )}
    </Paper>
  );
};

export default LatestMessages;
