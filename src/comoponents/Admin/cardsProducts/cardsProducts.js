import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CardProducts from "./cardProduct";
import { getProducts } from "../../../redux/actions";
import PaginadoCardAdmin from "./paginadoCardAdm";



export default function CardsProduct(){
    
const dispatch = useDispatch()
const allProducts = useSelector(state => state.products)
const [currentPage, setCurrentPage] = useState(1)
const [productsPerPage] = useState(5)
const indexOfLastCard = currentPage * productsPerPage
const indexOfFirstCard = indexOfLastCard - productsPerPage
const currentCards = allProducts.slice(indexOfFirstCard,indexOfLastCard)

const paginado = (pageNumber) => {
    setCurrentPage(pageNumber)
}


useEffect (()=> {
    paginado (1)
},[allProducts])


useEffect (()=> {
    dispatch(getProducts())
}, [dispatch])
    

    return (
        
        <div>
            <div className="ordenCardsProdAdmin">
                { currentCards.map((p)=> {
                    return(
                    <div key={p._id}>
                        <CardProducts id={p._id} image={p.image} name={p.name} price={p.price} />
                    </div> 
                    )} 
                )}                
            </div>
            {/* <div>
            {allProducts.length && <div className="ordenNextPrev">
                <div  onClick={handlePrevPage}><button className="buttonPrevCard"></button></div>
                <div onClick={handleNextPage}><button className="buttonNextCard"></button></div>
            </div>}
           </div>   */}
           <div className='ordenPagCarAdmin' >

           <PaginadoCardAdmin productsPerPage={productsPerPage}  allProducts={allProducts.length} paginado = {paginado}/>  
           </div>
        </div>
    )
}