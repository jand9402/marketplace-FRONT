import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import './NavBarAll.css'
import { brandFiltered, categoryFiltered, getBrand, getCategorys, orderByPrice } from "../../redux/actions";


const Filters = () => {
    const dispatch = useDispatch();
    const categorys = useSelector((state) => state.categorys)
    const brand = useSelector((state) => state.brand)

    const [pagActual, setPagActual] = useState(1)

    useEffect(() => {
        dispatch(getCategorys())
        dispatch(getBrand())
    }, [dispatch])

    function handleOrder (e) {
        e.preventDefault()
        dispatch(orderByPrice(e.target.value))
    }

    function handleCategoryFiltered(e) {
        e.preventDefault()
        dispatch(categoryFiltered(e.target.value))
        setPagActual(1)
    }

    function handleBrandFiltered(e) {
        e.preventDefault()
        dispatch(brandFiltered(e.target.value))
        console.log(e.target.value) 
    }

    return(
        <div className='boxFilters'>
            <select className='selectStyle' onChange={e => handleCategoryFiltered(e)}>
                <option value='all'>Categorías</option>
                {categorys?.map(c => (
                  <option key={c} value={c}>{c}</option>
                  ))
                }
          </select>
          <select className='selectStyle' onChange={e => handleBrandFiltered(e)}>
              <option>Marca</option>
              { brand?.map(b => (
                <option value={b}>{b}</option>
                ))
              }
          </select>
          {/* rompe cuando se setea PRECIO, tenemos que saber cual es la value para todos */}
          <select onChange={handleOrder} className='selectStyle'>
              <option value='' >Precio</option>
              <option value='1'>Menor a Mayor</option>
              <option value='-1'>Mayor a Menor</option>
            </select>
        </div>
    )

}

export default Filters