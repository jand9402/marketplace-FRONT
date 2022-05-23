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

    return (
        <div className='home'>
            <NavBarAll />
            <SearchBar />
            <div>
                <CarruselSuperior />
            </div>
            <Cards/>
        </div>
    )
}


