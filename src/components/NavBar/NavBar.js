import React from 'react'
import './NavBar.css';
import logo from '../../logo.png';

const NavBar = () => {
    return (
        <div className="App">
            <nav className="navbar" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <a className="navbar-item" href="#">
                        <img
                            alt="logo"
                            src={logo}
                            width="100%"
                            height="100%"
                        />
                    </a>
                    <a
                        href="#kk"
                        role="button"
                        className="navbar-burger"
                        aria-label="menu"
                        aria-expanded="false"
                        data-target="navbarBasicExample"
                    >
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>
                <div id="navbarBasicExample" className="navbar-menu">
                    <div className="navbar-start">
                    </div>
                    <div className="navbar-end">
                        <a class="navbar-item" href="#">
                            Hotel
                        </a>
                        <a class="navbar-item">
                            Promociones
                        </a>
                        <a class="navbar-item">
                            Eventos
                        </a>
                        <a class="navbar-item" >
                            Galeria
                        </a>
                        <div className="navbar-item">
                            <div className="buttons">
                                <a href="#kk" className="button is-light">
                                    RESERVAR
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar
