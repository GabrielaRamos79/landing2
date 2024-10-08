import React from "react";
import "./Hero.css";
import spin from "../../images/details/gif2.gif";
import yeah from "../../images/details/yeah.png";
import hacemos from "../../images/curvy/quehacemos.png";

function Hero() {
  return (
    <div className="hero-component">
      <div className="logo-text-container">
        <div className="spin-gif">
          <img src={spin} className="spin-logo" alt="logo" />
        </div>
        <h2 className="right-text">
          tu agencia de publicidad y comunicación 360º
        </h2>
      </div>
      <div className="hero-grid">
        <div className="punch-text">
          <p>Hacemos las cosas diferentes desde el otro lado</p>
          <p>del branding: publicidad, branded content, diseño</p>
          <p>
            y estrategia, ¡con un&nbsp;
            <span className="highlight">
              <b> punch de flow creativo</b>
            </span>
            !
          </p>
          <p>&nbsp;</p>
          <p>Si quieres revolucionar tu marca y llevarla hasta el</p>
          <p>éxito, es el momento de cruzar al otro lado.</p>
          <p>&nbsp;</p>
          <p>¿Quieres saber qué podemos hacer por ti?</p>
        </div>
        <div className="boton-container">
          <a className="boton-escribe" href="#contactForm">
            ESCRÍBENOS
          </a>
        </div>
      </div>
      <div className="header-grid">
        <div className="left-column">
          <img src={hacemos} className="hacemos" alt="que-hacemos" />
        </div>
        <div className="right-column">
          <img src={yeah} className="yeah" alt="ouh-yeah" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
