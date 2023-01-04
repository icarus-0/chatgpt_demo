import React from "react";
import "../css/Chatmessage.css";

function Chatmessage(props) {
  if (props.type === "user") {
    return (
      <div className="chat-message">
        <div className="chat-message-center">
          <div className="avatar"></div>
          <div className="message">{props.message}</div>
        </div>
      </div>
    );
  } else if (props.type === "chatgpt") {
    return (
      <div className="chat-message chatgpt">
        <div className="chat-message-center">
          <div className="avatar chatgpt"></div>
          <div className="message">{props.message}</div>
        </div>
      </div>
    );
  }
}

export default Chatmessage;
