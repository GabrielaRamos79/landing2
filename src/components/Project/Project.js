import React, { useState} from "react";
import "./Porject.css";
import gepro from "../../images/proyectos/gepro.png";
import supermexpro from "../../images/proyectos/supermexpro.png";
import montosapro from "../../images/proyectos/montosapro.png";
import lesrochespro from "../../images/proyectos/lesrochespro.png";
import almapro from "../../images/proyectos/almapro.png";
import porshepro from "../../images/proyectos/porshepro.png";
import mas from "../../images/details/mas.png";

import ge1 from "../../images/proyectos/ge-popup/ge-1.png";
import ge2 from "../../images/proyectos/ge-popup/ge-2.png";
import ge3 from "../../images/proyectos/ge-popup/ge-3.jpg";
import ge4 from "../../images/proyectos/ge-popup/ge-4.jpg";

import super1 from "../../images/proyectos/supermex-popup/super-1.jpg";
import super2 from "../../images/proyectos/supermex-popup/super-2.jpg";
import super3 from "../../images/proyectos/supermex-popup/super-3.jpg";
import super4 from "../../images/proyectos/supermex-popup/super-4.jpg";

import montosa1 from "../../images/proyectos/montosa-popup/montosa-1.jpg";
import montosa2 from "../../images/proyectos/montosa-popup/montosa-2.jpg";
import montosa3 from "../../images/proyectos/montosa-popup/montosa-3.png";
import montosa4 from "../../images/proyectos/montosa-popup/montosa-4.png";

import lesroches1 from "../../images/proyectos/lesroches-popup/lesroches-1.jpg";
import lesroches2 from "../../images/proyectos/lesroches-popup/lesroches-2.jpg";
import lesroches3 from "../../images/proyectos/lesroches-popup/lesroches-3.jpg";
import lesroches4 from "../../images/proyectos/lesroches-popup/lesroches-4.jpg";

import alma1 from "../../images/proyectos/alma-popup/alma-1.jpg";
import alma2 from "../../images/proyectos/alma-popup/alma-2.jpg";
import alma3 from "../../images/proyectos/alma-popup/alma-3.png";
import alma4 from "../../images/proyectos/alma-popup/alma-4.jpg";

import porshe1 from "../../images/proyectos/porshe-popup/porshe-1.jpg";
import porshe2 from "../../images/proyectos/porshe-popup/porshe-2.jpg";
import porshe3 from "../../images/proyectos/porshe-popup/porshe-3.jpg";
import porshe4 from "../../images/proyectos/porshe-popup/porshe-4.jpg";

// Datos de los proyectos con sus imágenes
const projects = [
  {
    name: "General Elevadores",
    coverImage: gepro,
    images: [ge1, ge2, ge3, ge4],
    description: "Actualizo mi branding y pasa esto…"
  },
  {
    name: "Supermex",
    coverImage: supermexpro,
    images: [super1, super2, super3, super4],
    description: "El rebranding que la competencia no quiere que veas."
  },
  {
    name: "Montosa",
    coverImage: montosapro,
    images: [montosa1, montosa2, montosa3, montosa4],
    description: "Seguro que no sabías que el aguacate también servía para esto."
  },
  {
    name: "Lesroches",
    coverImage: lesrochespro,
    images: [lesroches1, lesroches2, lesroches3, lesroches4],
    description: "Destino, ¿se nace o se hace?"
  },
  {
    name: "Alma",
    coverImage: almapro,
    images: [alma1, alma2, alma3, alma4],
    description: "Después de ver esto, vas a empezar a creer en el poder del Alma..."
  },
  {
    name: "Porshe",
    coverImage: porshepro,
    images: [porshe1, porshe2, porshe3, porshe4],
    description: "¿Qué fiera tiene cuatro patas que ruedan?"
  },
]

function Project() {
  const [showPopup, setShowPopup] = useState(false);
  const [currentImages, setCurrentImages] = useState([]); // Array de imágenes actual
  const [currentIndex, setCurrentIndex] = useState(0); // Índice de la imagen actual

  const handleProjectClick = (images) => {
    setCurrentImages(images);
    setCurrentIndex(0); // Reinicia al inicio de las imágenes
    setShowPopup(true); // Muestra el popup
  };

  const handleNextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % currentImages.length);
  };

  const handlePrevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + currentImages.length) % currentImages.length);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
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
          {projects.map((project, index) => (
            <div key={index} className="project-card" onClick={() => handleProjectClick(project.images)}>
              <img src={project.coverImage} alt={project.name} className="img-fluid" />
              <div className="project-info">
                <small>{project.name}</small>
                <h4>{project.description}</h4>
              </div>
              </div>
          ))}
          </div>
          
          {/* Popup de imagen */}
          {showPopup && (
          <div className="popup-overlay">
            <div className="popup-content">
              <img src={currentImages[currentIndex]} alt="Popup" className="img-fluid" />
              <button className="prev-btn" onClick={handlePrevImage}>
                {"<"}
              </button>
              <button className="next-btn" onClick={handleNextImage}>
                {">"}
              </button>
              <button className="close-btn" onClick={handleClosePopup}>
                x
              </button>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}

export default Project;
