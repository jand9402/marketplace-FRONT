import "./Cards.css";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from "./card";
import { getCategorys, getProducts, getCountries } from "../../redux/actions";
import Paginado from "../Paginado/Paginado";

export default function Cards() {
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.products);
  const countries = useSelector((state) => state.countries);
  let categorys = useSelector((state) => state.categorys);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(5);
  const indexOfLastCard = currentPage * productsPerPage;
  const indexOfFirstCard = indexOfLastCard - productsPerPage;
  const currentCards = allProducts.slice(indexOfFirstCard, indexOfLastCard);
  function inicioLocalStorage() {
    if (!localStorage.gestionStock) {
      localStorage.setItem("gestionStock", JSON.stringify(allProducts));
    }
  }
  inicioLocalStorage();

  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    paginado(1);
  }, [allProducts]);

  useEffect(() => {
    dispatch(getProducts());
    dispatch(getCategorys());
  }, [dispatch]);

  // console.log(countries)
  return (
    <div>
      <div className="categoriasHome">Nuestros productos</div>
      <div className="ordenCards">
        {currentCards.map((p) => {
          return (
            <div key={p._id}>
              <Card id={p._id} image={p.image} name={p.name} price={p.price} />
            </div>
          );
        })}
      </div>
      <Paginado
        productsPerPage={productsPerPage}
        allProducts={allProducts.length}
        paginado={paginado}
      />
    </div>
    // <div>
    //     <div className="container">Nuestros productos</div>
    //     <div className="row row-cards">
    //         { currentCards.map((p)=> {
    //             return(
    //             <div className="col" key={p._id}>
    //                 <Card id={p._id} image={p.image} name={p.name} price={p.price} />
    //             </div>
    //             )}
    //         )}
    //     </div>
    //    <Paginado productsPerPage={productsPerPage}  allProducts={allProducts.length} paginado = {paginado}/>
    // </div>
  );
}
