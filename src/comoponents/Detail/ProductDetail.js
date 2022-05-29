import React, {useEffect} from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getProducts } from "../../redux/actions";
import PriceDetail from "./PriceDetail";
import DescriptionProduct from "./DescriptionProduct";
import './ProductDetail.css'

export default function ProductDetail (){
    let {id} = useParams()
    let idProducto = {id}
    let test = idProducto.id
    const dispatch = useDispatch()
    let allProducts = useSelector((state) => state.products)

    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])
    
    // useEffect (() => {
    //     return dispatch(deletepreviousdetail())
    //  }, [dispatch])
   
    return(
        <div className="boxViewportDetail">
            <div className="positionButtonVolverDetai">
                <Link to='/' id='click'>
                    <button className="botonVolverDetail">VOLVER</button>
                </Link>
            </div>
            <div className="boxImagenPrecio">
                {allProducts?.map((producto)=>{
                    if (producto._id === test){
                        return(
                            <div className="boxImagenProducto">
                                <div className="divImagenPrincipal">
                                <img className="imagenDetailProd" src={producto.image[0]} alt='imagenProducto'/>
                                </div>
                                <div className="divImagen">
                                <a href={producto.image[0]}><img className="imagenSecundaria" src={producto.image[0]} alt='imagenProducto'/></a>
                                <a href={producto.image[1]}><img className="imagenSecundaria" src={producto.image[1]} alt='imagenProducto'/></a>
                                <a href={producto.image[2]}><img className="imagenSecundaria" src={producto.image[2]} alt='imagenProducto'/></a>
                                </div>  
                            </div>
                        )
                    }
                })}
                <PriceDetail/>
            </div>
            <div>
                <DescriptionProduct/>
            </div>
            <div> soy las valoraciones del usuario</div>
            <div>Soy los productos similares-por categoría-</div>
        </div>
    )
}