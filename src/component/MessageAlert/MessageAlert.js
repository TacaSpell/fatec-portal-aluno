import React from 'react';

import './MessageAlert.css';
export default function MessageAlert({ children, className, type }) {
  const getType = () => {
    return type || 'info';
  }

  return (
    <div className={`MessageAlert flex MessageAlert--${getType()}`} style={{ justifyContent: 'space-between' }}>
      <div className={className ? className : ''}>{children}</div>
    </div>
  );
}