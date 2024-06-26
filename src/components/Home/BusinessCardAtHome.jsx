// Navbar.js
import React from 'react';
import vaca1 from '../../assets/img/vaca1.jpg';
import vaca2 from '../../assets/img/vaca2.jpg';
import vaca3 from '../../assets/img/vaca3.jpg';
import "../../assets/styles/home.css"
import { Link } from 'react-router-dom';

const BusinessCardAtHome = () => {

    return (
        <>
            <main class="seccion contenedor" id="nosotros ">
                <h2 class="fw-300 centrartexto">Fincas más populares</h2>

                <div class="contenedor-anuncios">
                    <div class="anuncio">
                        <div class="contenido-anuncio">
                            <img src={vaca1} height={300} alt="anuncio1"></img>
                            <h3>Las margaritas</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur esse itaque blanditiis a
                                excepturi sed qui dignissimos doloribus, quae veritatis maxime quia, ipsam sint cumque minima
                                dolorum!
                                Quo, nobis.</p>
                            <p class="precio"> Propietario: <span className='text-dark' > Oscar Huertas</span> </p>

                            <a href="#" class="botones  boton-amarillo d-block">ver</a>
                        </div>
                    </div>
                    <div class="anuncio">
                        <img src={vaca2} height={300} alt="anuncio1"></img>
                        <div class="contenido-anuncio">
                            <h3>El socorro</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur esse itaque blanditiis a
                                magnam
                                excepturi sed qui dignissimos doloribus, quae veritatis maxime quia, ipsam sint cumque minima
                                dolorum!
                                Quo, nobis.</p>
                            <p class="precio">Propietario: <span className='text-dark'> Braikan Piña</span></p>

                            <a href="#" class="botones boton-amarillo d-block">ver</a>
                        </div>
                    </div>
                    <div class="anuncio">
                        <img src={vaca3} height={300} alt="anuncio1"></img>
                        <div class="contenido-anuncio">
                            <h3>Alto del yunque</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur esse itaque blanditiis a
                                magnam
                                excepturi sed qui dignissimos doloribus, quae veritatis maxime quia, ipsam sint cumque minima
                                dolorum!
                                Quo, nobis.</p>
                            <p class="precio"> Propietario: <span className='text-dark'> Jhon Mendez</span></p>


                            <a href="#" class="botones  boton-amarillo d-block">ver</a>
                        </div>
                    </div>
                </div>

                <div class="aladerecha">
                    <li className="nav-item">
                        <Link className="nav-link botones  boton-verde" to="/farms-list">Ver todas</Link>
                    </li>
                </div>

            </main>
        </>
    );
};

export default BusinessCardAtHome;
