import React, { useState } from 'react';
import { Send, Upload } from 'lucide-react';
import './MessageInput.css';

const MessageInput = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="message-input">
      <div className="input-container">
        <button className="btn" onClick={() => setShowDropdown(!showDropdown)} aria-label="Upload file">
          <Upload />
          {showDropdown && (
            <div className="dropdown">
              <a href="#" className="dropdown-item">Upload Image</a>
              <a href="#" className="dropdown-item">Upload Document</a>
              <a href="#" className="dropdown-item">Upload Audio</a>
            </div>
          )}
        </button>
        <textarea className="input" placeholder="Type your message here..." />
        <button className="btn" aria-label="Send message">
          <Send />
        </button>
      </div>
    </div>
  );
};

export default MessageInput;