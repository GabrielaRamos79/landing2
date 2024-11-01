import React from "react";
import "./Porject.css";
import gepro from "../../images/proyectos/gepro.png";
import supermexpro from "../../images/proyectos/supermexpro.png";
import montosapro from "../../images/proyectos/montosapro.png";
import lesrochespro from "../../images/proyectos/lesrochespro.png";
import almapro from "../../images/proyectos/almapro.png";
import porshepro from "../../images/proyectos/porshepro.png";

// Datos de los proyectos con sus imágenes
const projects = [
  {
    name: "General Elevadores",
    coverImage: gepro,
    description: "Actualizo mi branding y pasa esto…",
  },
  {
    name: "Supermex",
    coverImage: supermexpro,
    description: "El rebranding que la competencia no quiere que veas.",
  },
  {
    name: "Montosa",
    coverImage: montosapro,
    description:
      "Seguro que no sabías que el aguacate también servía para esto.",
  },
  {
    name: "Lesroches",
    coverImage: lesrochespro,
    description: "Destino, ¿se nace o se hace?",
  },
  {
    name: "Alma",
    coverImage: almapro,
    description:
      "Después de ver esto, vas a empezar a creer en el poder del Alma...",
  },
  {
    name: "Porshe",
    coverImage: porshepro,
    description: "¿Qué fiera tiene cuatro patas que ruedan?",
  },
];

function Project() {
  const handleProjectClick = () => {
    const contactSection = document.getElementById("contactForm");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    } else {
      // Si no existe la sección en esta página, puedes redirigir a una página de contacto
      window.location.href = "/#contactForm";
    }
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
            <div
              key={index}
              className="project-card"
              onClick={handleProjectClick}
            >
              <img
                src={project.coverImage}
                alt={project.name}
                className="img-fluid"
              />
              <div className="project-info">
                <small>{project.name}</small>
                <h4>{project.description}</h4>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Project;
