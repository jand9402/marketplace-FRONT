import "./Cards.css";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {Link} from "react-router-dom";
import Card from "./card"
import { getCategorys, getProducts } from "../../redux/actions";

export default function Cards(){

    // const allProducts = useSelector(state => state.products)
    // console.log(allProducts)
    // console.log(allProducts)
 const dispatch = useDispatch()
//     const [pagActual, setPagActual] = useState(1)
//     const [cardsPorPag, setCardPorPag] = useState(5)
//     const indiceDeCardsFinal = pagActual * cardsPorPag
//     const indiceDeCardsPrinc = indiceDeCardsFinal - cardsPorPag
//     const tarjetasAct = allProducts?.slice( indiceDeCardsPrinc,indiceDeCardsFinal)

    
// const paginado = (numeroDePag) => {
//     setPagActual(numeroDePag)
// }
const [currentPage, setCurrentPage] = useState(0)

    const [numberPage, setNumberPage] = useState(1)

    const allProducts = useSelector(state => state.products)
    
    const [offset, setOffset] = useState(5)

  
    const filteredCountries = () =>{
        
        return allProducts.slice(currentPage,currentPage+offset)
    }

    const handleNextPage = () =>{
        if(allProducts.length > currentPage + offset){
            setCurrentPage(currentPage+offset)
        }
        if(allProducts.length>1){
            setNumberPage(numberPage+1) 
        }
    }

    const handlePrevPage= () =>{    
       if(currentPage>0){
           setCurrentPage(currentPage-offset)  
           setNumberPage(numberPage-1)      
       }  
       if(currentPage>0){
        setCurrentPage(currentPage-(offset-1))
        setNumberPage(numberPage-1)      
    }
}

// useEffect (()=> {
//     currentPage(1)
// },[filteredCountries])


    useEffect (()=> {
        dispatch(getProducts())
        dispatch(getCategorys())
    }, [dispatch])
    

    return (
        <div>
            <div className="categoriasHome" >Categorías</div>
            <div className="ordenCards">
                { filteredCountries().map((p)=> {
                    return(
                        <div key={p._id}>
                        <Link to= {'/detailVisit/'+ p._id}  className= "sinlineaCountCards">
                           <Card image={p.image} name={p.name} price={p.price} />
                        </Link>
                    </div>
                )} 
                )}
            </div>
            <div>
            {allProducts.length && <div className="ordenNextPrev">
                <div  onClick={handlePrevPage}><button className="buttonPrevCard"></button></div>
                <div onClick={handleNextPage}><button className="buttonNextCard"></button></div>
            </div>}
           </div>    
        </div>
    )

}
