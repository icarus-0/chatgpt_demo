import React, { useState } from "react";
import Chatmessage from "./Chatmessage";
import "../css/Chatbox.css";

function Chatbox() {
  const [input, setInput] = useState("");
  const [chatlog, setChatLog] = useState([
    {
      user: "chatgpt",
      message: "How Can I help you today",
    },
    {
      user: "user",
      message: "I want to learn",
    },
  ]);

  function clearChat() {
    setChatLog([]);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    let chatLogNew = [...chatlog, { user: "user", message: `${input}` }];

    await setInput("");
    setChatLog(chatLogNew);

    const messages = chatLogNew.map((message) => message.message).join("\n");
    const response = await fetch("http://127.0.0.1:8000/api/openai", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: messages,
        currentModel: localStorage.getItem("currentModel"),
      }),
    });

    const data = await response.json();
    await setChatLog([
      ...chatLogNew,
      { user: "chatgpt", message: `${data.message}` },
    ]);
  }

  return (
    <section className="chatbox">
      <div className="chat-log">
        {chatlog.map((message, index) => (
          <Chatmessage
            key={index}
            message={message.message}
            type={message.user}
          />
        ))}
      </div>
      <div className="chat-input-holder">
        <form onSubmit={handleSubmit}>
          <input
            className="chat-input-textarea"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          ></input>
        </form>
        <button className="clear-button" onClick={clearChat}>
          Clear Chat
        </button>
      </div>
    </section>
  );
}

export default Chatbox;
