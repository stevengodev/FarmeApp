// PresentationImage.js
import React from 'react';
import logo from '../../assets/img/back.jpg';
import '../../assets/styles/home.css'; // Ajusta la ruta según la estructura de tu proyecto

const PresentationImage = () => {
    return (
        <div className="presentation-container">
            <img src={logo} alt="Presentation Background" className="presentation-image" />
        </div>
    );
};

export default PresentationImage;
