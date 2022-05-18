import "./Cards.css";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {Link} from "react-router-dom";
import Card from "./card"
import { getProducts } from "../../redux/actions";


export default function Cards(){

    const allProducts = useSelector(state => state.products)
    // console.log(allProducts)
    const dispatch = useDispatch()

    useEffect (()=> {
        dispatch(getProducts())
    }, [dispatch])
    
    return (
        <div>
            <div className="categoriasHome" >Categorías</div>
            <div className="ordenCards">
            {allProducts && allProducts.map((p)=> {
                return(
                    <div key={p._id}>
                        <Link to= {'/detailVisit/'+ p._id}  className= "sinlineaCountCards">
                           <Card image={p.image} name={p.name} price={p.price} />
                        </Link>
                    </div>
                )
            } )}
            </div>
        </div>
    )

}
