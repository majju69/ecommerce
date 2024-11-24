import React from 'react';
import { Alert } from 'react-bootstrap';

const Message = ({variant="info",children}) => {
  return (
    <Alert variant={variant}>
      {children}  {/* This will display the message passed as children */}
    </Alert>
  )
}

export default Message
