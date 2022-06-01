import React from 'react'
import './CarruselSuperior.css'
import BannerElectro from '../../assets/banners/bannerElectro.jpg'
import BannerDeportes from '../../assets/banners/banner3.jpg'
import BannerCel1 from '../../assets/banners/bannerCel1.jpg'
import BannerCel2 from '../../assets/banners/bannerCel2.jpg'

export default function CarruselSuperior() {
  
  return (
    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src={BannerCel1} className="d-block w-100" alt="..."/>

      </div>
      <div className="carousel-item">
        <img src={BannerCel2}  className="d-block w-100" alt="bannerElectro"/>
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
