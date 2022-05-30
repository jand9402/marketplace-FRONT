import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import './NavBarAll.css'
import { brandFiltered, categoryFiltered, getBrand, getCategorys, getProducts } from "../../redux/actions";


export default  function Filters  ()  {
    const dispatch = useDispatch();

    // const products = useSelector((state) => state.products)
    let categorys = useSelector((state) => state.categorys)
    let products = useSelector((state) => state.products)
    let filtrado = useSelector((state) => state.allProducts)

    let arrCategory = []

     categorys = categorys.map(c => {

        if (!c) {(
            arrCategory.push("other")
            )
        } else {
            (
                arrCategory.push(c)
            )
        }
    })
    
    const brand = useSelector((state) => state.brand)

    const [pagActual, setPagActual] = useState(1)
    const [orden, setOrden] = useState('')


    useEffect(() => {
        dispatch(getProducts())
        dispatch(getCategorys())
        dispatch(getBrand())
    }, [dispatch])


    function handleCategoryFiltered(e) {
        dispatch(categoryFiltered(e.target.value))
        setPagActual(1)
    }

    function handleBrandFiltered(e) {
        dispatch(brandFiltered(e.target.value))
        console.log(e.target.value) 
    }

    function handleClick(e) {
        dispatch(getProducts())
        setPagActual(1)
    }

    return(
        <div className="d-flex">
            <button className='todo' onClick={e => { handleClick(e) }}>
                    Todos
            </button>
          <select class="form-select" aria-label="Default select example" onChange={e => handleBrandFiltered(e)}>
              <option value="all">Marca ▼</option>
              { brand.map(b => (
                <option key={b} value={b}>{b}</option>
                ))
              }
          </select>
            <select class="form-select" aria-label="Default select example" onChange={e => handleCategoryFiltered(e)}>
                <option value="all">Modelo ▼</option>
                {
                    products.map(c => (

                            <option key={c.model} value={c.model}>{c.model}</option>
                        )
                )
                }
          </select>
        </div>
    )

}

