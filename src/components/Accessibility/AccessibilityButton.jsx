// AccessibilityButton.js
import React, { useState } from 'react';

const AccessibilityButton = () => {
    const [menuVisible, setMenuVisible] = useState(false);

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };

    return (
        <>
            <button id="accessibilityButton" onClick={toggleMenu} style={buttonStyles}>
                <i className="fas fa-universal-access"></i>
            </button>
            {menuVisible && (
                <div id="accessibilityMenu" style={menuStyles}>
                    <h2>Menú De Accesibilidad (CTRL+U)</h2>
                    <button>
                        <i className="fas fa-adjust"></i> Contraste +
                    </button>
                    <button>
                        <i className="fas fa-link"></i> Resaltar enlaces
                    </button>
                    <button>
                        <i className="fas fa-text-height"></i> Agrandar texto
                    </button>
                    <button>
                        <i className="fas fa-text-width"></i> Espaciado de texto
                    </button>
                    <button>
                        <i className="fas fa-ban"></i> Detener animaciones
                    </button>
                    <button>
                        <i className="fas fa-images"></i> Ocultar Imágenes
                    </button>
                    <div style={{ textAlign: 'center', marginTop: '10px' }}>
                        <a href="#">Reportar un problema</a>
                    </div>
                    <div style={{ textAlign: 'center', marginTop: '10px' }}>
                    <i className="fas fa-info-circle" style={{ fontSize: '24px', color: '#007BFF' }}></i>
                    </div>
                </div>
            )}
        </>
    );
};

export default AccessibilityButton;

// Estilos del botón
const buttonStyles = {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    padding: '10px',
    backgroundColor: '#007BFF',
    color: 'white',
    border: 'none',
    borderRadius: '50%',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '24px',
    width: '60px',
    height: '60px',
    zIndex: '1000',
};

// Estilos del menú
const menuStyles = {
    position: 'fixed',
    bottom: '100px',
    right: '20px',
    width: '300px',
    backgroundColor: 'white',
    border: '1px solid #ddd',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    padding: '10px',
    zIndex: '1000',
};



