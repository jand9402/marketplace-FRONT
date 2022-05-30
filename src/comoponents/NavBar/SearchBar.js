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
            <form className="d-flex" role="search" onSubmit={handleSubmit} >
                <input value={name} className="form-control me-2" type="search" placeholder="Buscar Producto" aria-label="Search" onChange={(e) =>handleSearchName(e)} />
                <button className="btn btn-outline-success btn-buscar" type="submit">Buscar</button>
            </form>
    )

}

export default SearchBar