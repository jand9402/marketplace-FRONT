import React from "react";
import "./Paginado.css";


export default function Paginado ({productsPerPage, allProducts, paginado}){
    const pageNumbers = []

    for(let i = 0; i <=Math.ceil(allProducts/productsPerPage)-1; i++){
        pageNumbers.push(i+1)
    }

    return(
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-auto">
                    <nav id="menu">
                        <ul>
                            { pageNumbers && pageNumbers.map(page => (
                            <li key={page}>
                                <button className="nav-btn" onClick={() => paginado(page)}>{page}</button>
                            </li>
                            ))
                            }
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    )
}