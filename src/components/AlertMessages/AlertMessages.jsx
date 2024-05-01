import React from 'react'

const AlertMessages = ({ message, type }) => {
  return (
    <div className={`alert ${type}`} role="alert" >
      {message}
    </div>
  )
};


export default AlertMessages;
