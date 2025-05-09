import React from 'react';
import './Loading.css';

const Loading = ({ center = false, size = 'medium' }) => {
  return (
    <div className={`loading ${center ? 'loading--center' : ''} loading--${size}`}>
      <div className="loading__spinner"></div>
    </div>
  );
};

export default Loading;
