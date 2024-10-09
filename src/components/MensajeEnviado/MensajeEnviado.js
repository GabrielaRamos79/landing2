import React from 'react';
import './MensajeEnviado.css';  // Estilos personalizados
import trazo from "../../images/details/trazado.png";
import gif1 from "../../images/details/gif1.gif";

const MensajeEnviado = () => {
  return (
    <div className="mensaje-enviado-container">
      <h1>¡Mensaje Recibido!</h1>
      <p>Pronto contactaremos contigo para darle caña a tu marca.</p>
      <img src="ruta-al-gif.gif" alt="Gif confirmación" />
    </div>
  );
};

export default MensajeEnviado;
