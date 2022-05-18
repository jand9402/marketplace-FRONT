import React from "react";
import './NavBarAll.css'


const Filters = () => {

    return(
        <div class='boxFilters'>
            <select class='selectStyle'>
                <option>Categorías</option>
                <option>map del resto</option>
            </select>
            <select class='selectStyle'>
                <option>Marcas</option>
                <option>Map de las marcas</option>
            </select>
            <select class='selectStyle'>
                <option>Precio</option>
                <option>Menor a Mayor</option>
                <option>Mayor a Menor</option>
            </select>
        </div>
    )

}

export default Filters