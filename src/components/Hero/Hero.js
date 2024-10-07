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
      <div>
        <div className="punch">
          <p>
            Hacemos las cosas diferentes desde el otro lado
            <br />
            del branding: publicidad, branded content, diseño
            <br />y estrategia, ¡con un&nbsp;
            <span className="highlight">
              <b> punch de flow creativo</b>
            </span>
            !<br />
            <span>
              <br />
              Si quieres revolucionar tu marca y llevarla hasta el
              <br />
              éxito, es el momento de cruzar al otro lado.
            </span>
            <br />
            <br />
            ¿Quieres saber qué podemos hacer por ti?
          </p>
        </div>
      </div>

      <a className="boton-escribe" href="#contactForm">
        ESCRÍBENOS
      </a>
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
