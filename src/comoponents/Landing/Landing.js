import React from 'react'
import { Link } from 'react-router-dom'
import "./landingStyles.css";
import LogoProv from '../../assets/logo/LogoProv.png'
import Videofondo from '../../assets/video/videoLanding2.mp4'

export default function Landing () {
    return (
      <div class='contenedor'>
        <div class='fila'>
          <div class='columna_botones'>
            <video class='videoLanding'  autoPlay ="autoplay" loop muted>
                     <source  src={Videofondo} type= "video/mp4" />
            </video>
            <div class='columna_interior_botones'>
              <div class='encabezado'>
                <div class='logo'>
                  <img class='logoLanding' src={LogoProv} />
                </div>
                <div class='contenedor_slogan'>
                  <h3 class='sologan'>Aqui va el slogan</h3>
                </div>
              </div>
              <Link class='linksDeLanding' to='/login'>
                <button class='boton'>
                  Iniciar sesión
                </button>
              </Link>
              <Link class='linksDeLanding' to='/register'>
                <button class='boton'>
                  Registrarse
                </button>
              </Link>
  
              <Link class='linksDeLanding' to='/homeVisit'>
                <button class='boton_visitante'>Visitante</button>
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