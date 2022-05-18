import React from 'react'
import './CarruselSuperior.css'
import BannerElectro from '../../assets/banners/bannerElectro.jpg'

export default function CarruselSuperior() {
  
  return (
    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src="https://img.freepik.com/psd-gratis/logotipo-ofertas-imperdibles-brasil-3d-render_314999-351.jpg?w=2000" className="d-block w-100" alt="..."/>
      </div>
      <div className="carousel-item">
        <img src={BannerElectro} className="d-block w-100" alt="bannerElectro"/>
      </div>
      <div className="carousel-item">
        <img src="https://www.oleoshop.com/imagenes/poridentidad?identidad=0e88ff79-60eb-4a95-aa58-7ce7f5294a71&ancho=850&alto=" className="d-block w-100" alt="..."/>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
  )
}
