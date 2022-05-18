import React from "react";
import './SearchBar.css'
import useSearchByName from '../../hooks/useSearchByName'

const SearchBar = () => {
    const { handleSearchName,handleSubmit, name } = useSearchByName()

    

    return (
        <div class='positionSearchBar'>
            <form onSubmit={handleSubmit} >
                <input class= 'inputSearchBar' type='text' autoComplete= 'off' placeholder="Buscar productos" onChange={(e) =>handleSearchName(e)} />
                <button type='submit' class='botonSearchBar' ></button> 
            </form>
        </div>
    )

}

export default SearchBar