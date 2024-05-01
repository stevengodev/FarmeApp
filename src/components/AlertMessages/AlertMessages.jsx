import React from 'react'

const AlertMessages = ({ message, type}) => {
  return (
    <div className={`alert alert-${type} alert-dismissible fade show`} role="alert">
      <strong>{message}</strong>
      <button type="button" className="btn-close" aria-label="Close"></button>
    </div>
  )
};


export default AlertMessages;
