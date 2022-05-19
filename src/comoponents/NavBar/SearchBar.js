import React, { useState } from "react";
import './SearchBar.css'
import { useDispatch } from "react-redux";
import { searchByName } from "../../redux/actions";

const SearchBar = () => {

    const dispatch = useDispatch();
    const [name, setName] = useState ('');
    
    
    function handleSearchName (e) {
        e.preventDefault()
        setName (e.target.value)
    }
    
    
    function handleSubmit (e) {
        e.preventDefault()
        dispatch(searchByName(name))
        setName('')
    }
    

    return (
        <div className='positionSearchBar'>
            <form onSubmit={handleSubmit} >

                <input value={name} class='inputSearchBar' type='text' autoComplete= 'off' placeholder="Buscar productos" onChange={(e) =>handleSearchName(e)} />
                <button type='submit' class='botonSearchBar' ></button> 

            </form>
        </div>
    )

}

export default SearchBar