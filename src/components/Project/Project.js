import React, { useState} from "react";
import "./Porject.css";
import gepro from "../../images/proyectos/gepro.png";
import supermexpro from "../../images/proyectos/supermexpro.png";
import montosapro from "../../images/proyectos/montosapro.png";
import lesrochespro from "../../images/proyectos/lesrochespro.png";
import almapro from "../../images/proyectos/almapro.png";
import porshepro from "../../images/proyectos/porshepro.png";
import mas from "../../images/details/mas.png";
import gepopup from "../../images/proyectos/gepopup.png";
import collage from "../../images/proyectos/collage3.png";

function Project() {
  const [showPopup, setShowPopup] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);
  const [showSecondImage, setShowSecondImage] = useState(false);

  const handleImageClick = (image) => {
    setCurrentImage(image);
    setShowPopup(true);
    setShowSecondImage(false);
  };

  const handleNextImage = () => {
    setShowSecondImage(true); // Muestra la segunda imagen cuando haces clic en la primera
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    setCurrentImage(null);
    setShowSecondImage(false);
  };
  return (
    <div className="container-project">
      <section className="projects-section">
        
          {/* Título de la sección */}
          <div className="row">
            <div className="col text-start">
              <h2 className="section-title">Te hacemos spoiler</h2>
              <h2 className="section-title"> de nuestros mejores</h2>
              <h2 className="section-title"> proyectos</h2>
            </div>
          </div>
          <div className="container-project2">
          {/* Primera fila de proyectos */}
          <div className="proyect-row row">
            <div>
              <div
                className="project-card"
                onClick={() => handleImageClick(gepopup)}
              >
                <img
                  src={gepro}
                  alt="General Elevadores"
                  className="img-fluid"
                />
                <div className="project-info">
                  <small>General Elevadores</small>
                  <h4>Actualizo mi branding y pasa esto…</h4>
                </div>
              </div>
            </div>
            <div>
              <div
                className="project-card"
                onClick={() => handleImageClick(collage)}
              >
                <img src={supermexpro} alt="Supermex" className="img-fluid" />
                <div className="project-info">
                  <small>Supermex</small>
                  <h4>El rebranding que la competencia no quiere que veas.</h4>
                </div>
              </div>
            </div>
            <div>
              <div
                className="project-card"
                onClick={() => handleImageClick(gepopup)}
              >
                <img src={montosapro} alt="Montosa" className="img-fluid" />
                <div className="project-info">
                  <small>Montosa</small>
                  <h4>
                    Seguro que no sabías que el aguacate también servía para
                    esto.
                  </h4>
                </div>
              </div>
            </div>
          </div>

          {/* Segunda fila de proyectos */}
          <div className="project-row row">
            <div>
              <div
                className="project-card"
                onClick={() => handleImageClick(gepopup)}
              >
                <img
                  src={lesrochespro}
                  alt="Les Roches"
                  className="img-fluid"
                />
                <div className="project-info">
                  <small>Les Roches</small>
                  <h4>Destino, ¿se nace o se hace?</h4>
                </div>
              </div>
            </div>
            <div>
              <div
                className="project-card"
                onClick={() => handleImageClick(gepopup)}
              >
                <img src={almapro} alt="Alma Láser" className="img-fluid" />
                <div className="project-info">
                  <small>Alma Láser</small>
                  <h4>
                    Después de ver esto, vas a empezar a creer en el poder del
                    Alma...
                  </h4>
                </div>
              </div>
            </div>
            <div>
              <div
                className="project-card"
                onClick={() => handleImageClick(gepopup)}
              >
                <img src={porshepro} alt="Porsche" className="img-fluid" />
                <div className="project-info">
                  <small>Porsche</small>
                  <h4>¿Qué fiera tiene cuatro patas que ruedan?</h4>
                </div>
              </div>
            </div>
          </div>
          {/* Popup de imagen */}
          {showPopup && (
            <div className="popup-overlay">
              <div className="popup-content">
                <img
                  src={showSecondImage ? collage : currentImage}
                  alt="Popup"
                  className="img-fluid"
                  onClick={showSecondImage ? undefined : handleNextImage}
                />
                <img
                  src={mas}
                  alt="volver"
                  className="close-btn"
                  onClick={handleClosePopup}
                />
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default Project;
