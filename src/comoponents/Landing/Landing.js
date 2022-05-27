import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./landingStyles.css";
import LogoProv from '../../assets/logo/LogoProv.png'
import Videofondo from '../../assets/video/videoLanding2.mp4'
import RegisterForm from '../RegisterForm/RegisterForm';

export default function Landing () {
    // let locaS = []
    // let otro = 'otro'
    // localStorage.setItem("itemCar", JSON.stringify(locaS))
    // localStorage.setItem("otra", JSON.stringify(otro))

    // console.log(localStorage)
    return (
      <div className='contenedor'>
        <div className='fila'>
          <div className='columna_botones'>
            <video className='videoLanding'  autoPlay ="autoplay" loop muted>
                     <source  src={Videofondo} type= "video/mp4" />
            </video>
            <div className='columna_interior_botones'>
              <div className='encabezado'>
                <div className='logo'>
                  <img className='logoLanding' src={LogoProv} alt='logoLanding'/>
                </div>
                <div className='contenedor_slogan'>
                  <h3 className='sologan'>Aqui va el slogan</h3>
                </div>
              </div>
              <Link className='linksDeLanding' to='/login'>
                <button className='boton'>
                  Iniciar sesión
                </button>
              </Link>
              {/* <Link className='linksDeLanding' to='/register'> */}
                <button className='boton'>
                  Registrarse
                </button>
              {/* </Link>
   */}
              <Link className='linksDeLanding' to='/home'>
                <button className='boton_visitante'>Visitante</button>
              </Link>
            </div>
          </div>
          <div >
            <div >
  
              {/* <img src='https://cdn-icons-png.flaticon.com/512/3394/3394009.png' /> */}
            </div>
          </div>
        </div>
      </div>
  
    )
  }