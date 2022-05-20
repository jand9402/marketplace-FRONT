
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";


const CarItem = ({data}) => {
    const {name, image} = data

return(
    <div>
        <h4>{name}</h4>
        <img src={image}/>

    </div>
)
}

export default CarItem