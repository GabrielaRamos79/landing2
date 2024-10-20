import React, {useEffect} from 'react';
import './Carousel.css';
import linea from "../../images/details/Linea.png";
import estrella from "../../images/details/estrella.png";

function Carousel() {
  useEffect(() => {
    // Podemos agregar código JS si es necesario, por ejemplo, para hacer las filas más dinámicas o para interacciones futuras.
  }, []);
  return (
    <div className="container-carousel">
    <section className="carousel-section">
      {/* Primera fila - Movimiento de derecha a izquierda */}
      <div className="carousel-row">
        <div className="carousel-content move-right">
          <span>social media</span>
          <img src={estrella} alt="star icon" className="icon-star" />
          <span>fotografía</span>
          <img src={linea} alt="line icon" className="icon-line" />
          <span>packaging</span>
          <img src={estrella} alt="star icon" className="icon-star" />
          <span>redacción creativa</span>
          <img src={linea} alt="line icon" className="icon-line" />
          <span>social media</span>
          <img src={estrella} alt="star icon" className="icon-star" />
          <span>fotografía</span>
          <img src={linea} alt="line icon" className="icon-line" />
          <span>packaging</span>
          <img src={estrella} alt="star icon" className="icon-star" />
          <span>redacción creativa</span>
          <img src={linea} alt="line icon" className="icon-line" />
          <span>social media</span>
          <img src={estrella} alt="star icon" className="icon-star" />
          <span>fotografía</span>
          <img src={linea} alt="line icon" className="icon-line" />
          <span>packaging</span>
          <img src={estrella} alt="star icon" className="icon-star" />
          <span>redacción creativa</span>
          <img src={linea} alt="line icon" className="icon-line" />
          <span>social media</span>
          <img src={estrella} alt="star icon" className="icon-star" />
          <span>fotografía</span>
          <img src={linea} alt="line icon" className="icon-line" />
          <span>packaging</span>
          <img src={estrella} alt="star icon" className="icon-star" />
          <span>redacción creativa</span>
          <img src={linea} alt="line icon" className="icon-line" />
          <span>social media</span>
          <img src={estrella} alt="star icon" className="icon-star" />
          <span>fotografía</span>
          <img src={linea} alt="line icon" className="icon-line" />
          <span>packaging</span>
          <img src={estrella} alt="star icon" className="icon-star" />
          <span>redacción creativa</span>
          <img src={linea} alt="line icon" className="icon-line" />
          <span>social media</span>
          <img src={estrella} alt="star icon" className="icon-star" />
          <span>fotografía</span>
          <img src={linea} alt="line icon" className="icon-line" />
          <span>packaging</span>
          <img src={estrella} alt="star icon" className="icon-star" />
          <span>redacción creativa</span>
          <img src={linea} alt="line icon" className="icon-line" />
          <span>consultoría estratégica</span>
          <img src={estrella} alt="star icon" className="icon-star" />
          <span>motion graphics</span>
          <img src={linea} alt="line icon" className="icon-line" />
          <span>desarrollo web</span>
          <img src={estrella} alt="star icon" className="icon-star" />
        </div>
      </div>

      {/* Segunda fila - Movimiento de izquierda a derecha */}
      <div className="carousel-row">
        <div className="carousel-content move-left">
          <span>consultoría estratégica</span>
          <img src={estrella} alt="star icon" className="icon-star" />
          <span>motion graphics</span>
          <img src={linea} alt="line icon" className="icon-line" />
          <span>desarrollo web</span>
          <img src={estrella} alt="star icon" className="icon-star" />
          <span>consultoría estratégica</span>
          <img src={estrella} alt="star icon" className="icon-star" />
          <span>motion graphics</span>
          <img src={linea} alt="line icon" className="icon-line" />
          <span>desarrollo web</span>
          <img src={estrella} alt="star icon" className="icon-star" />
          <span>consultoría estratégica</span>
          <img src={estrella} alt="star icon" className="icon-star" />
          <span>motion graphics</span>
          <img src={linea} alt="line icon" className="icon-line" />
          <span>desarrollo web</span>
          <img src={estrella} alt="star icon" className="icon-star" />
          <span>consultoría estratégica</span>
          <img src={estrella} alt="star icon" className="icon-star" />
          <span>motion graphics</span>
          <img src={linea} alt="line icon" className="icon-line" />
          <span>desarrollo web</span>
          <img src={estrella} alt="star icon" className="icon-star" />
          <span>consultoría estratégica</span>
          <img src={estrella} alt="star icon" className="icon-star" />
          <span>motion graphics</span>
          <img src={linea} alt="line icon" className="icon-line" />
          <span>desarrollo web</span>
          <img src={estrella} alt="star icon" className="icon-star" />
        </div>
      </div>
    </section>
    </div>
  );
}

export default Carousel;