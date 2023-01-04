import React from "react";
import Chatmessage from "./Chatmessage";
import "../css/Chatbox.css";

function Chatbox() {
  return (
    <section className="chatbox">
      <div className="chat-log">
        <Chatmessage />
      </div>
      <div className="chat-input-holder">
        <textarea className="chat-input-textarea" rows="1"></textarea>
      </div>
    </section>
  );
}

export default Chatbox;
