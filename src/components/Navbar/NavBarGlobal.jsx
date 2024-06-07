import React from 'react';
import { Link } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';
import logo from '../../assets/img/logo2.png';
import '../../assets/styles/home.css'; // Ajusta la ruta según la estructura de tu proyecto
import '@fortawesome/fontawesome-free/css/all.min.css';

const NavbarGlobal = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-body-tertiary">
            <div className="container-fluid">
                <Link className="navbar-brand ms-4" to="/">
                    <img src={logo} alt="Logo" width="100" height="40" className="d-inline-block align-text-top" />
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <form className="d-flex pb-3">
                    <input className="form-control me-2" type="search" placeholder="¿Que estas buscando?" aria-label="¿Que estas buscando?" style={{ maxWidth: '200px', height: '30px', marginTop: '30px' }} />
                    <button className="btn btn-success" type="submit" style={{ width: '60px', marginTop: '30px', padding: '5px 5px', fontSize: '14px' }} >Buscar</button>
                </form>

                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav ms-auto me-4">

                        <li className="nav-item dropdown">
                            <Dropdown>
                                <Dropdown.Toggle variant="link" id="navbarDropdownMenuLink2" className="dropdown-toggle">
                                    <div className="dropdown-content">
                                        <i class="fa-solid fa-house"></i>
                                        <span className="text">Inicio</span>
                                    </div>
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item href="/" className="dropdown-item">Negocio</Dropdown.Item>
                                    <Dropdown.Item href="/" className="dropdown-item">Tareas</Dropdown.Item>
                                    <Dropdown.Item href="/" className="dropdown-item">Empleados</Dropdown.Item>
                                    <Dropdown.Item href="/" className="dropdown-item">Configuracion</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </li>

                        <li className="nav-item dropdown">
                            <Dropdown>
                                <Dropdown.Toggle variant="link" id="navbarDropdownMenuLink2" className="dropdown-toggle">
                                    <div className="dropdown-content">
                                        <i className="fas fa-building icon"></i>
                                        <span className="text">Nosotros</span>
                                    </div>
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item href="/" className="dropdown-item">Sobre nosotros</Dropdown.Item>
                                    <Dropdown.Item href="/" className="dropdown-item">Contacto</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </li>

                        <li className="nav-item dropdown">
                            <Dropdown>
                                <Dropdown.Toggle variant="link" id="navbarDropdownMenuLink2" className="dropdown-toggle">
                                    <div className="dropdown-content">
                                        <i className="fas fa-cow icon"></i>
                                        <span className="text">Productos</span>
                                    </div>
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item href="/store" className="dropdown-item">Toros</Dropdown.Item>
                                    <Dropdown.Item href="/store" className="dropdown-item">Vacas</Dropdown.Item>
                                    <Dropdown.Item href="/store" className="dropdown-item">Terneros</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </li>

                        <li className="nav-item dropdown">
                            <Dropdown>
                                <Dropdown.Toggle variant="link" id="navbarDropdownMenuLink2" className="dropdown-toggle">
                                    <div className="dropdown-content">
                                        <i class="fa-solid fa-circle-info"></i>
                                        <span className="text">Ayuda</span>
                                    </div>
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item href="/" className="dropdown-item">Preguntas frecuentes</Dropdown.Item>
                                    <Dropdown.Item href="/" className="dropdown-item">Información de envíos</Dropdown.Item>
                                    <Dropdown.Item href="/" className="dropdown-item">Política de devoluciones</Dropdown.Item>
                                    <Dropdown.Item href="/" className="dropdown-item">Términos y condiciones</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </li>

                        <li className="nav-item dropdown">
                            <Dropdown>
                                <Dropdown.Toggle variant="link" id="navbarDropdownMenuLink2" className="dropdown-toggle">
                                    <div className="dropdown-content">
                                        <i class="fa-solid fa-user"></i>
                                        <span className="text">Perfil</span>
                                    </div>
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#" className="dropdown-item">Cerrar sesion</Dropdown.Item>
                                </Dropdown.Menu>

                            </Dropdown>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavbarGlobal;
