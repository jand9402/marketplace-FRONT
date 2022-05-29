import React from 'react'
import './CarruselSuperior.css'
import BannerElectro from '../../assets/banners/bannerElectro.jpg'
import BannerDestacados from '../../assets/banners/Banner1.jpg'
import BannerDeportes from '../../assets/banners/banner3.jpg'

export default function CarruselSuperior() {
  
  return (
    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src={BannerDestacados} className="d-block w-100" alt="..."/>

      </div>
      <div className="carousel-item">
        <img src={BannerElectro}  className="d-block w-100" alt="bannerElectro"/>
      </div>
      <div className="carousel-item">
        <img src={BannerDeportes} className="d-block w-100" alt="..."/>
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
