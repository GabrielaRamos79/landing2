import React from 'react';
import './Footer.css';
import puente from "../../images/details/logopuente.png";
import circulo from "../../images/details/circulo.png";
import salpicadoazul from "../../images/details/salpicadoazul.png";

function Footer() {
  return (
    <div>
      <footer className="footer-section">
        <div className="splatter-image">
          <img src={salpicadoazul} alt="Salpicado" />
        </div>
        <div className="social-links">
          <div className="link-container">
            <a
              href="https://www.instagram.com/elpuentebranding/"
              target="_blank"
              rel="noopener noreferrer"
            >
              INSTAGRAM&nbsp;
            </a>
            <img
              src={circulo}
              alt="Circle Effect"
              className="circle-effect-instagram"
            />
          </div>
          <div className="link-container">
            <a
              href="https://www.linkedin.com/company/el-puente-publicidad/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LINKEDIN&nbsp;
            </a>
            <img
              src={circulo}
              alt="Circle Effect"
              className="circle-effect-linkedin"
            />
          </div>
          <div className="link-container">
            {/* <div className="vimeo-wrapper"> */}
            <a
              href="https://vimeo.com/elpuentepublicidad"
              target="_blank"
              rel="noopener noreferrer"
            >
              VIMEO
            </a>

            <img
              src={circulo}
              alt="Circle Effect"
              className="circle-effect-vimeo"
            />
          </div>
        </div>

        <div className="legal-links">
          <div className="link-container">
            <a href="https://www.elpuentepublicidad.com/aviso-legal">
              aviso legal
            </a>
            <img
              src={circulo}
              alt="Circle Effect"
              className="circle-effect-aviso"
            />
          </div>
          <div className="link-container">
            <a href="https://www.elpuentepublicidad.com/politica-de-privacidad">
              política de privacidad
            </a>
            <img
              src={circulo}
              alt="Circle Effect"
              className="circle-effect-privacidad"
            />
          </div>
          <div className="link-container">
            <a href="https://www.elpuentepublicidad.com/politica-de-cookies">
              política de cookies
            </a>
            <img
              src={circulo}
              alt="Circle Effect"
              className="circle-effect-cookie"
            />
          </div>
        </div>
        <div className="footer-logo">
          <a
            href="https://www.elpuentepublicidad.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={puente} alt="El Puente Branding Logo" />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Footer;