import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import './NavBarAll.css'
import { brandFiltered, categoryFiltered, getBrand, getCategorys, getProducts } from "../../redux/actions";


const Filters = () => {
    const dispatch = useDispatch();
    // const products = useSelector((state) => state.products)
    const categorys = useSelector((state) => state.categorys)
    const brand = useSelector((state) => state.brand)

    const [pagActual, setPagActual] = useState(1)
    // const [cardsPorPag, setCardPorPag] = useState(5)
    // const indiceDeCardsFinal = pagActual * cardsPorPag
    // const indiceDeCardsPrinc = indiceDeCardsFinal - cardsPorPag
    // const tarjetasAct = products.slice( indiceDeCardsPrinc,indiceDeCardsFinal)

    // console.log(products)
    // console.log(categorys)

    useEffect(() => {
        // dispatch(getProducts())
        dispatch(getCategorys())
        dispatch(getBrand())
    }, [dispatch])

    function handleCategoryFiltered(e) {
        e.preventDefault()
        dispatch(categoryFiltered(e.target.value))
        console.log(e.target.value)
        setPagActual(1)
    }

    function handleBrandFiltered(e) {
        e.preventDefault()
        dispatch(brandFiltered(e.target.value))
        console.log(e.target.value)
        // setCurrentPage(1)
    }

    return(
        <div className='boxFilters'>
             <select className='selectStyle' onChange={e => handleCategoryFiltered(e)}>
              
              <option value='all'>Categorías</option>
              {
                  categorys?.map(c => (
                      <option key={c} value={c}>{c}</option>
                  ))
              }
          </select>
          <select className='selectStyle' onChange={e => handleBrandFiltered(e)}>
              
              <option>Marca</option>
              {
                  brand?.map(b => (
                      <option value={b}>{b}</option>
                  ))
              }
          </select>
            <select className='selectStyle'>
                <option>Precio</option>
                <option>Menor a Mayor</option>
                <option>Mayor a Menor</option>
            </select>
        </div>
    )

}

export default Filters