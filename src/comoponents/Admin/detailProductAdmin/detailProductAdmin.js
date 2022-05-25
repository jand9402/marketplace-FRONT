import React, { useEffect } from "react";
import { getProducts, getDetail } from "../../../redux/actions";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deletepreviousdetail } from "../../../redux/actions";

export default function DetailProductAdmin () {
    const dispatch = useDispatch();
    const detail = useSelector (state => state.detail)
    console.log (detail)

const {id} = useParams();

useEffect (()=>{
    dispatch(getDetail(id))
}, [dispatch, id])

useEffect (() => {
    return dispatch(deletepreviousdetail())
}, [dispatch])
    
    return (
        <div key={id}>
             <img  src={detail.image} alt="imageProduct"/>
        </div>
    )
}