import React from 'react';
import './Sidebar.css';

const Sidebar = ({ isOpen }) => (
  <div className={`sidebar ${isOpen ? 'open' : ''}`}>
    <div className="sidebar-content">
      <div className="sidebar-item"><a href="index.html">Home</a></div>
      <div className="sidebar-item"><a href="plans.html">Plans</a></div>
      <div className="sidebar-item"><a href="settings.html">Settings</a></div>
      <div className="sidebar-item"><a href="help.html">Help</a></div>
      <div className="sidebar-item"><a href="RecordTalkingHead.html">Make Talking Head Video</a></div>
    </div>
  </div>
);

export default Sidebar;