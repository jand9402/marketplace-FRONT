import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUsers } from "../../../redux/actions";
import CardUsers from "./cardUsers";
import { useSelector } from "react-redux";
import './cardsUsers.css'

export default function CardsUsers(){
    
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
const users = useSelector (state => state.users)
const token = useSelector (state => state.token)
console.log(users)

useEffect (()=>{
    dispatch(getUsers(localStorage.getItem('authorization', token)))
}, [dispatch])


// useEffect (()=> {
//     dispatch(getProducts())
// }, [dispatch])
    
    return (
        
        <div>
            <div className="ordenCardsUsers">
                { users.user?.map((p)=> {
                    return(
                    <div key={p._id}>
                        <CardUsers _id={p._id} name={p.name} phoneNumber={p.phoneNumber} role={p.role} />
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
           {/* <div className='ordenPagCarAdmin' >

           <PaginadoCardAdmin productsPerPage={productsPerPage}  allProducts={allProducts.length} paginado = {paginado}/>  
           </div> */}
        </div>
    )
}