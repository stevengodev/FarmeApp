import React from 'react';
import { Alert } from 'react-bootstrap';

const CustomAlert = ({ message, variant, onClose }) => {
    return (
        <Alert variant={variant} onClose={onClose} dismissible>
            {message}
        </Alert>
    );
};

export default CustomAlert;