import React, { useRef } from "react";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";
import "./ContactForm.css";
import estrella from "../../images/details/estrella.png";
import flecha from "../../images/details/Flecha.png";
import gif1 from "../../images/details/gif1.gif";
import textura from "../../images/details/textura2.png";

function ContactForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_usxjseg",
        "template_jv0ugsg",
        form.current,
        "iCp1J85jBw00nH5_-"
      )
      .then(
        (result) => {
          console.log(result.text);
          // SweetAlert mensaje de éxito
          Swal.fire({
            title: "¡Mensaje Recibido!",
            text: "Pronto contactaremos contigo para darle caña a tu marca.",
            imageUrl: gif1,
            imageWidth: 200,
            imageHeight: 200,
            imageAlt: "Gif de confirmación",
            background: `url(${textura})`,
            confirmButtonColor: "#e9ea50",
            confirmButtonText: "OK",
            // Personalización del estilo
            customClass: {
              title: "custom-title rotated-title", // Clase CSS personalizada para el título
              text: "custom-text",
              popup: "custom-popup", // Clase CSS para el popup
              confirmButton: "custom-confirm-button", // Clase para el botón de confirmación
            },

            // Opcional: Cambiar el color del fondo o reducir la transparencia
            backdrop: "rgba(0, 0, 0, 0.9)", // Fondo oscuro con un poco de transparencia
          });
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
          // SweetAlert mensaje de error
          Swal.fire({
            title: "Error",
            text: "Hubo un problema al enviar el mensaje. Inténtalo de nuevo más tarde.",
            icon: "error",
            confirmButtonText: "OK",
          });
        }
      );
  };
  return (
    <div id="contactForm" className="container custom-container">
      <h1 className="form-title"> VAMOS AL LÍO!</h1>
      <form ref={form} onSubmit={sendEmail}>
        <div className="form-group">
          <label htmlFor="name">Nombre</label>
          <div className="input-wrapper">
            <input
              type="text"
              id="name"
              name="from_name"
              className="form-input"
              required
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="email">Mail</label>
          <div className="input-wrapper">
            <input
              type="email"
              id="email"
              name="user_email"
              className="form-input"
              required
            />
            <img src={estrella} alt="star icon" className="star-icon" />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="phone">Teléfono</label>
          <div className="input-wrapper">
            <input type="tel" id="phone" className="form-input" required />
          </div>
        </div>

        <div className="form-group2">
          <label htmlFor="message">
            Haznos un teaser sobre qué <br /> necesitas
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            className="form-input"
            required
          ></textarea>
        </div>
        <div className="form-group2">
          <h2>Ready para que tu marca empiece </h2>
          <h2>a petarlo?</h2>
          <div className="send-wrapper">
            <button type="submit" className="send-button">
              YASSSSSS!
            </button>
            <div className="terms-wrapper">
              <input type="checkbox" id="terms" />
              <label htmlFor="terms">
                He leído y acepto la{" "}
                <a href="https://www.elpuentepublicidad.com/politica-de-privacidad">
                  política de privacidad
                </a>
              </label>
              <img src={flecha} alt="arrow icon" className="arrow-icon" />
              <span className="arrow-text">
                DALE
                <br /> PARA
                <br /> ENVIAR
              </span>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
