import React from 'react'
// import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import NavBarAll from '../NavBar/NavBarAll.js'
import SearchBar from '../NavBar/SearchBar.js'
import CarruselSuperior from '../CarruselSuperior/CarruselSuperior.js'
import Cards from '../Cards/Cards'
import Paginado from '../Paginado/Paginado'
import { getProducts } from '../../redux/actions/index'
import { Link } from 'react-router-dom'

export default function Home() { 

    return (
        <div class='home'>
            <NavBarAll />
            <SearchBar />
            {/* <Link to={"/detailVisit/" + 'id'}>
            <button>detalle</button>
            </Link> */}
            <div>
                <CarruselSuperior />
            </div>
            <Cards/>
            {/* <Paginado
                    productsPerPage={productsPerPage}
                    allProducts={allProducts.length}
                    paginado={paginado}
                />
            <div class="cards">
                {currentProduct?.map((product) => {
                    // console.log(product)
                    return (
                        <Cards/>
                    )
                }
                )
                }
            </div> */}
        </div>
    )
}


