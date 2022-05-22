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
   
    return(
        <div className="boxViewportDetail">
            <div className="positionButtonVolverDetai">
                <Link to='/home' id='click'>
                    <button className="botonVolverDetail">VOLVER</button>
                </Link>
            </div>
            <div className="boxImagenPrecio">
                {allProducts?.map((producto)=>{
                    if (producto._id === test){
                        return(
                            <div className="boxImagenProducto">
                                <img className="imagenDetailProd" src={producto.image} alt='imagenProducto'/>
                            </div>
                        )
                    }
                })}
                <PriceDetail/>
            </div>
            <div>
                <DescriptionProduct/>
            </div>
            <div>Soy los productos similares-por categoría-</div>
        </div>
    )
}