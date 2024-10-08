import React from 'react';
import './Client.css';
import LesRoches from "../../images/logos/LesRoches.png";
import Luxudise from "../../images/logos/Luxudise.png";
import Malaga from "../../images/logos/Malaga.png";
import Porshe from "../../images/logos/Porsche.png";
import Qipro from "../../images/logos/Qipro.png";
import Supermex from "../../images/logos/Supermex.png";
import Mediamaraton from "../../images/logos/Mediamaraton.png";
import Alma from "../../images/logos/Alma.png";
import Alabardero from "../../images/logos/Alabardero.png";
import Segurestil from "../../images/logos/Segurestil.png";

function Client() {
  return (
    <div className="container-pclients">
      <section className="section-client">
        <div className="grid-clients">
            {/* Primera fila de logos */}
              <img
                src={LesRoches}
                alt="Les Roches"
                className="lesroches-client client-logo"
              />
              <img
                src={Luxudise}
                alt="Luxudise"
                className="luxudise-client client-logo"
              />
              <img
                src={Malaga}
                alt="Málaga"
                className="malaga-client client-logo"
              />
              <img
                src={Porshe}
                alt="Porshe"
                className="porshe-client client-logo"
              />
              <img src={Qipro} alt="Qipro" className="qipro-client client-logo" />
            {/* Segunda fila de logos */}
              <img
                src={Supermex}
                alt="Super Mex"
                className="supermex-client client-logo"
              />
              <img
                src={Mediamaraton}
                alt="Media Maraton"
                className="maraton-client client-logo"
              />
              <img src={Alma} alt="Alma" className="alma-client client-logo" />
              <img
                src={Alabardero}
                alt="Alarbadero"
                className="alarbadero-client client-logo"
              />
              <img
                src={Segurestil}
                alt="Segurestil"
                className="segurestil-client client-logo"
              />
            </div>
          {/* Texto final con el botón */}
          <div className="text-button">
              <p className="quieres">¿Quieres ser una de ellas?</p>
              <a href="#contactForm" className="btn-yes">
                YES!
              </a>
            </div>
      </section>
    </div>
  );
}

export default Client;