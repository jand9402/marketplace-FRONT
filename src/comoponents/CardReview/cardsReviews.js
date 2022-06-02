import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getProducts } from "../../redux/actions";
import { useSelector } from "react-redux";
import CardReviews from "./cardReviews";
import './cardsReviews.css'

export default function CardsReviews(id){
    console.log(id.id)
const dispatch = useDispatch()
// const [currentPage, setCurrentPage] = useState(1)
// const [productsPerPage] = useState(5)
// const indexOfLastCard = currentPage * productsPerPage
// const indexOfFirstCard = indexOfLastCard - productsPerPage
// const currentCards = allProducts.slice(indexOfFirstCard,indexOfLastCard)

// const paginado = (pageNumber) => {
//     setCurrentPage(pageNumber)
// }


// useEffect (()=> {
//     paginado (1)
// },[allProducts])
let esteId = id.id
const product = useSelector (state => state.allProducts)
let esteEs = product.find(item => item._id === esteId)
console.log(esteEs)
let reviwes = esteEs.reviews

useEffect (()=>{
    dispatch(getProducts())
}, [dispatch])


// useEffect (()=> {
//     dispatch(getProducts())
// }, [dispatch])
    
    return (
        
        <div>
            <div className="ordenCardsUsers">
                { reviwes?.map((p)=> {
                    return(
                    <div key={p._id}>
                        <CardReviews rating={p.rating}  comment={p.comment}/>
                    </div> 
                    )} 
                )}                
            </div>
        </div>
    )
}