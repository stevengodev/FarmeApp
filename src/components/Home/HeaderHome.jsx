// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/logo2.png'
import NavbarHome from './NavBarHome';
import "../../assets/styles/home.css"

const HeaderHome = () => {

    return (
        <>
            <header class="site-header inicio">
                <div class="contenedor contenido-header">
                    <div class="barra">

                        <Link className="nav-link" to="/">
                            <img src={logo}></img>
                        </Link>

                        <NavbarHome/>
                        
                    </div>

                    <h1>Más alla de simples negocios</h1>

                </div>
            </header>
        </>
    );
};

export default HeaderHome;
