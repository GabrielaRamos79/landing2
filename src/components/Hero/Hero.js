import React, {useEffect, useState} from "react";
import "./Hero.css";
import spin from "../../images/details/gif2.gif";
import spinstatic from "../../images/details/gif2.png";
import yeah from "../../images/details/yeah.png";
import hacemos from "../../images/curvy/quehacemos.svg";

function Hero() {
  const [showStaticImage, setShowStaticImage] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowStaticImage(true);
    }, 5000); // 5000 milisegundos = 5 segundos
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div className="hero-component">
      <div className="logo-text-container">
        <div className="spin-gif">
        {showStaticImage ? (
            <img src={spinstatic} className="spin-logo" alt="logo estático" />
          ) : (
            <img src={spin} className="spin-logo" alt="logo giratorio" />
          )}
        </div>
        <div className="right-text-container">
        <h2 className="right-text">
          tu&nbsp;agencia</h2>
          <h2 className="right-text">de&nbsp;publicidad&nbsp;y</h2>
          <h2 className="right-text">comunicación&nbsp;<span className="new-line">360º</span></h2>
          </div>
      </div>
      <div className="hero-grid">
        <div className="punch-text">
          <p>Hacemos las cosas diferentes desde el otro lado</p>
          <p>del branding: publicidad, branded content, diseño</p>
          <p>
            y estrategia, ¡con un&nbsp;
            <span className="highlight">
               punch de flow creativo
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
        <div className="yeah-container">
          <img src={yeah} className="yeah" alt="ouh-yeah" />
        </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
