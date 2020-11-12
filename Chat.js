import React from 'react';
import firebase from 'firebase'


const Chat=()=>{
    
    return (
        <div>
          <div className="header-area">
            <h1> Danish Chat App </h1>
          </div>
          <div className="message-area">
            <ul id="messages" />
          </div>
          <div className="typing-area">
            <form onsubmit={"return sendMessage();"}>
              <input id="message" className="typing-box" placeholder="Enter message" autoComplete="off" />
              <input type="submit" className="send-button btn btn-outline-primary" defaultValue="send" />
            </form></div>
        </div>
      );
}

export default Chat;