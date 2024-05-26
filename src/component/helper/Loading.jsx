import React from 'react';
import './style.css';

function Loading({loading}) {
  return (
    <div className={`loading-overlay ${loading ? 'active' : ''}`}>
      <div className="loading-spinner"></div>
    </div>
  );
}

export default Loading;
