// AccessibilityMenu.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faAdjust,
    faLink,
    faTextHeight,
    faTextWidth,
    faBan,
    faImages,
} from '@fortawesome/free-solid-svg-icons';

const AccessibilityMenu = () => {
    return (
        <div id="accessibilityMenu">
            <h2>Menú De Accesibilidad (CTRL+U)</h2>
            <button>
                <FontAwesomeIcon icon={faAdjust} /> Contraste +
            </button>
            <button>
                <FontAwesomeIcon icon={faLink} /> Resaltar enlaces
            </button>
            <button>
                <FontAwesomeIcon icon={faTextHeight} /> Agrandar texto
            </button>
            <button>
                <FontAwesomeIcon icon={faTextWidth} /> Espaciado de texto
            </button>
            <button>
                <FontAwesomeIcon icon={faBan} /> Detener animaciones
            </button>
            <button>
                <FontAwesomeIcon icon={faImages} /> Ocultar Imágenes
            </button>
            <div style={{ textAlign: 'center', marginTop: '10px' }}>
                <a href="#">Reportar un problema</a>
            </div>
            <div style={{ textAlign: 'center', marginTop: '10px' }}>
                <img
                    src="https://userway.org/logo.png"
                    alt="USERWAY"
                    style={{ width: '100px' }}
                />
            </div>
        </div>
    );
};

export default AccessibilityMenu;
