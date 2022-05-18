import "./Cards.css";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {Link} from "react-router-dom";
import Card from "./card"
import { getCategorys, getProducts } from "../../redux/actions";


export default function Cards(){

    const allProducts = useSelector(state => state.products)
    // console.log(allProducts)
    const dispatch = useDispatch()
    const [pagActual, setPagActual] = useState(1)
    const [cardsPorPag, setCardPorPag] = useState(5)
    const indiceDeCardsFinal = pagActual * cardsPorPag
    const indiceDeCardsPrinc = indiceDeCardsFinal - cardsPorPag
    const tarjetasAct = allProducts.slice( indiceDeCardsPrinc,indiceDeCardsFinal)

    const handleNextPage = () =>{
        if(tarjetasAct.length > pagActual + cardsPorPag){
            setPagActual(pagActual+cardsPorPag)
        }
        if(tarjetasAct.length>1){
            setCardPorPag(cardsPorPag+1) 
        }
    }

    const handlePrevPage= () =>{    
       if(pagActual>0){
           setPagActual(pagActual-cardsPorPag)  
           setCardPorPag(cardsPorPag-1)      
       }  
       if(pagActual>0){
        setPagActual(pagActual-(cardsPorPag-1))
        setCardPorPag(cardsPorPag-1)      
    }
}

    useEffect (()=> {
        dispatch(getProducts())
        dispatch(getCategorys())
    }, [dispatch])
    
    return (
        <div>
            <div className="categoriasHome" >Categorías</div>
            <button onClick={handlePrevPage}>Prev</button>
            <div className="ordenCards">
                {tarjetasAct  && tarjetasAct.map((p)=> {
                return(
                    <div key={p._id}>
                        <Link to= {'/detailVisit/'+ p._id}  className= "sinlineaCountCards">
                           <Card image={p.image} name={p.name} price={p.price} />
                        </Link>
                    </div>
                )} 
                )}
            </div>
            <button onClick={handleNextPage}>Netx</button>
        </div>
    )

}
