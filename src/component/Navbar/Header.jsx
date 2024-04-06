import React from 'react';
import "./Style.css" ;


export default function Header() {
  return (
    <div className="header">
      <div className="profile">
        <img src="profilepic.jpg" alt="Admin" className="profile-photo" />
        <div className="profile-info">
          <h3 className="profile-name">John Doe</h3>
          <p className="profile-role">Admin</p>
        </div>
      </div>
    </div>
  )
}
