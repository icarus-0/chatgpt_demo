import React from "react";
import "../css/Chatmessage.css";

function Chatmessage() {
  return (
    <div>
      <div className="chat-message">
        <div className="chat-message-center">
          <div className="avatar"></div>
          <div className="message">Naman</div>
        </div>
      </div>
      <div className="chat-message chatgpt">
        <div className="chat-message-center">
          <div className="avatar chatgpt"></div>
          <div className="message">I am an AI</div>
        </div>
      </div>
    </div>
  );
}

export default Chatmessage;
