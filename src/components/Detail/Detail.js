import React from "react";
// import NavBarAll from "../NavBar/NavBarAll";
import ProductDetail from "./ProductDetail";
import NavBarDetail from "../NavBar/NavBaRDetail";
import { useSelector } from "react-redux";

export default function Detail (props) {
    const userData = useSelector((state) => state.userData)

    if (!userData) {
        
        props.history.push("/login");
      
    }
    
    let data = JSON.parse(userData);
    console.log(data)
    

    // data.role === "registered" &&     data.isAdmin
  

    return(
        <div>        
        {
                data.isAdmin ?   (<div>
                <NavBarDetail/>
                <ProductDetail/>
            </div>) : <p>No tienes permitido el acceso </p>
        }
        </div>
    )
}