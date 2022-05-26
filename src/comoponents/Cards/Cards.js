import "./Cards.css";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from "./card"
import { getCategorys, getProducts} from "../../redux/actions";
import Paginado from "../Paginado/Paginado";


export default function Cards(){
    
const dispatch = useDispatch()
const allProducts = useSelector(state => state.products)
const [currentPage, setCurrentPage] = useState(1)
const [productsPerPage] = useState(5)
const indexOfLastCard = currentPage * productsPerPage
const indexOfFirstCard = indexOfLastCard - productsPerPage
const currentCards = allProducts.slice(indexOfFirstCard,indexOfLastCard)

// let filtrado = useSelector((state) => state.allProducts)

const paginado = (pageNumber) => {
    setCurrentPage(pageNumber)
}

//     const handleNextPage = () =>{
//         if(allProducts.length > currentPage + cardsPerPage){
//             setCurrentPage(currentPage+cardsPerPage)
//         }
//         if(allProducts.length>1){
//             setNumberPage(numberPage+1) 
//         }
//     }

//     const handlePrevPage= () =>{    
//        if(currentPage >0){
//            setCurrentPage(currentPage-cardsPerPage)  
//            setNumberPage(numberPage-1)      
//        }  
//        if(currentPage>0){
//         setCurrentPage(currentPage-(cardsPerPage-1))
//         setNumberPage(numberPage-1)      
//     }
// }

useEffect (()=> {
    paginado (1)
},[allProducts])


useEffect (()=> {
    dispatch(getProducts())
    dispatch(getCategorys())
}, [dispatch])
    

    return (
        
        <div>
            <div className="categoriasHome">Nuestros productos</div>
            <div className="ordenCards">
                { currentCards.map((p)=> {
                    return(
                    <div key={p._id}>
                        <Card id={p._id} image={p.image} name={p.name} price={p.price} />
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
           <Paginado productsPerPage={productsPerPage}  allProducts={allProducts.length} paginado = {paginado}/>  
        </div>
    )
}
