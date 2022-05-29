import React from 'react'
import { Link } from 'react-router-dom'
// import { useEffect, useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
import NavBarAll from '../NavBar/NavBarAll.js'
import SearchBar from '../NavBar/SearchBar.js'
import CarruselSuperior from '../CarruselSuperior/CarruselSuperior.js'
import Cards from '../Cards/Cards'
// import Paginado from '../Paginado/Paginado'
// import { getProducts } from '../../redux/actions/index'
// import { Link } from 'react-router-dom'

export default function Home() { 

    function inicioLocalStorage (){
        if(!localStorage.itemCar)
    {let locaS = []
    let otro = 'otro'
    localStorage.setItem("itemCar", JSON.stringify(locaS))
    localStorage.setItem("otra", JSON.stringify(otro))}
    }
    // console.log(localStorage.itemCar)
    inicioLocalStorage()
    // useEffect (()=> {
//     dispatch(getProducts())
//     dispatch(getCategorys())
// }, [dispatch])
    return (
        <div className='home'>
            <NavBarAll />
            {/* <SearchBar /> */}
            <div>
                <CarruselSuperior />
            </div>
            <Cards/>
        </div>
    )
}


