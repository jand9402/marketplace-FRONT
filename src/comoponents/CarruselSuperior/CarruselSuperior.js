import React from 'react'
import './CarruselSuperior.css'

export default function CarruselSuperior() {
  
  return (
    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="https://img.freepik.com/psd-gratis/logotipo-ofertas-imperdibles-brasil-3d-render_314999-351.jpg?w=2000" class="d-block w-100" alt="..."/>
      </div>
      <div class="carousel-item">
        <img src="https://www.lancetalent.com/blog/wp-content/uploads/Disen%CC%83o-sin-ti%CC%81tulo-26-1.png" class="d-block w-100" alt="..."/>
      </div>
      <div class="carousel-item">
        <img src="https://www.oleoshop.com/imagenes/poridentidad?identidad=0e88ff79-60eb-4a95-aa58-7ce7f5294a71&ancho=850&alto=" class="d-block w-100" alt="..."/>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
  )
}
