import React from 'react';
import './Services.css';
import marca from "../../images/curvy/marca.svg";
import digital from "../../images/curvy/digital.svg";
import media from "../../images/curvy/media.svg";
import branding from "../../images/curvy/brandingsmall.svg";
import web from "../../images/curvy/web.svg";
import audiovisual from "../../images/curvy/audiovisual.svg";
import alotrolado from "../../images/curvy/otrolado2.svg";
import flechaizq from "../../images/details/flechaizq.png";

function Services() {
  return (
    <div>
      <section className="services-section">
        {/* <img src={hacemos} className="hacemos" alt="que-hacemos" /> */}
        <div className="container-services">
          <div className="row">
            {/* Primera fila */}
            <div className="col">
              <h3>
                ESTRATEGIA DE{" "}
                <img src={marca} className="curvy curvy-marca" alt="marca" />
              </h3>
              <ul>
                <li>Consultoría estratégica de comunicación</li>
                <li>Auditoría de marca</li>
                <li>Plan integral de marketing</li>
                <li>Investigación de mercado</li>
                <li>Campañas publicitarias</li>
                <li>Gabinete de comunicación</li>
              </ul>
            </div>
            <div className="col">
              <h3>
                ESTRATEGIA{" "}
                <img
                  src={digital}
                  className="curvy curvy-digital"
                  alt="digital"
                />
              </h3>
              <ul>
                <li>Search Engine Optimization (SEO)</li>
                <li>Search Engine Marketing (SEM)</li>
                <li>Social Media Optimization (SMO)</li>
                <li>Inbound marketing</li>
                <li>Reputación online</li>
                <li>Programática</li>
              </ul>
            </div>
            <div className="col">
              <h3>
                SOCIAL{" "}
                <img src={media} className="curvy curvy-media" alt="media" />
              </h3>
              <ul>
                <li>Gestión de redes sociales</li>
                <li>Estrategia de contenidos</li>
                <li>Social Ads</li>
                <li>Gestión de influencers</li>
              </ul>
            </div>
          </div>

          <div className="row second-line">
            {/* Segunda fila */}
            <div className="col">
              <h3>
                <img
                  src={branding}
                  className="curvy curvy-branding"
                  alt="branding"
                />
              </h3>
              <ul className='ul-branding'>
                <li>Identidad corporativa</li>
                <li>Identidad verbal</li>
                <li>Identidad sensorial</li>
                <li>Identidad actitudinal</li>
                <li>Manual de identidad de marca</li>
              </ul>
            </div>
            <div className="col">
              <h3>
                DESARROLLO{" "}
                <img src={web} className="curvy curvy-web" alt="web" />
              </h3>
              <ul>
                <li>Consultoría web</li>
                <li>Diseño y desarrollo</li>
                <li>Arquitectura de la información</li>
                <li>Experiencia de usuario</li>
                <li>Gestión y mantenimiento</li>
              </ul>
            </div>
            <div className="col">
              <h3>
                PRODUCCION{" "}
                <img
                  src={audiovisual}
                  className="curvy curvy-audiovisual"
                  alt="audiovisual"
                />
              </h3>
              <ul>
                <li>Spot</li>
                <li>Vídeo corporativo</li>
                <li>Vídeo marketing</li>
                <li>Motion graphics</li>
                <li>Locución y cuñas de radio</li>
                <li>Gabinete de comunicación</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container al-otro-lado-section">
          <h1 className="cruzado">MIRA QUIÉN HA CRUZADO YA</h1>
          <div className="content-container">
            <div className="left-side">
              <img src={alotrolado} className="otrolado" alt="alotrolado" />
              <h2 className="telita">TELITAAAAAAA</h2>
            </div>
            <div className="right-side">
            
              <img src={flechaizq} className="flecha" alt="flecha" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;