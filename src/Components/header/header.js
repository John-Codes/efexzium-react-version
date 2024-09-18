import React from 'react';
import { Menu } from 'lucide-react';
import './Header.css';

const Header = ({ toggleSidebar }) => (
  <div className="header">
    <div className="header-content">
      <button className="hamburger-menu" onClick={toggleSidebar}>
        <Menu />
      </button>
      <div className="header-title">=$=</div>
      <div style={{ width: '30px' }} />
    </div>
  </div>
);

export default Header;