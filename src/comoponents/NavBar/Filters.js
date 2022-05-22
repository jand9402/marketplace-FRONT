import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import './NavBarAll.css'
import { brandFiltered, categoryFiltered, getBrand, getCategorys, getProducts, orderByPrice } from "../../redux/actions";


const Filters = () => {
    const dispatch = useDispatch();

    // const products = useSelector((state) => state.products)
    let categorys = useSelector((state) => state.categorys)

    let arrCategory = []

     categorys = categorys.map(c => {

        if (!c) {(
            arrCategory.push("other")
            // c = "other"
            )
        } else {
            (
                // c = c
                arrCategory.push(c)
            )
        }
    })
    
    const brand = useSelector((state) => state.brand)

    const [pagActual, setPagActual] = useState(1)
    const [orden, setOrden] = useState('')
    // const [cardsPorPag, setCardPorPag] = useState(5)
    // const indiceDeCardsFinal = pagActual * cardsPorPag
    // const indiceDeCardsPrinc = indiceDeCardsFinal - cardsPorPag
    // const tarjetasAct = products.slice( indiceDeCardsPrinc,indiceDeCardsFinal)

    // console.log(products)
    console.log(arrCategory)


    useEffect(() => {
        dispatch(getProducts)
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

    function handleClick(e) {
        e.preventDefault();
        dispatch(getProducts())
        setPagActual(1)
    }

    return(
        <div className='boxFilters'>
            <button className='selectStyle' onClick={e => { handleClick(e) }}>
                    Cargar productos
                </button>
            <select className='selectStyle' onChange={e => handleCategoryFiltered(e)}>
                <option value='all'>Categorías</option>
                
                {
                    
                    arrCategory.map(c => (

                            <option key={c} value={c}>{c}</option>
                        )
                )
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
              <option value='1'>Precio</option>
              <option value='1'>Menor a Mayor</option>
              <option value='-1'>Mayor a Menor</option>
            </select>
        </div>
    )

}

export default Filters