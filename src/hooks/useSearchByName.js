import React, { useState }  from "react";
import {useDispatch} from 'react-redux';
import { searchByName } from "../redux/actions";

const UseSearchByName = () => {

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
    
return {
    handleSearchName,
    handleSubmit,
    name
  }
}

export default UseSearchByName