import React from "react";
import "./Header.css";
import puente from "../../images/details/logopuente_recortado.png";
import acento from "../../images/details/Acento.png";

function Header() {
    return (
        <div className="container-header">
            <header className="header-navbar">
                <div className="logo">
                    <h1 className="acento-somos">
                        <span className="acento-img-wrapper">
                        <img src={acento} alt="Logo Acento" className="acento-img" /> 
                        </span>
                        Somos
                    </h1>
                    <img src={puente} alt="Puente Logo" className="puente-img" />
                </div>
            </header>
        </div>
    );
}

export default Header;