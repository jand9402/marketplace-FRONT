import React from "react";
import './cardsReviews.css'


export default function CardReviews({rating, comment}) {
console.log('rating')
    return (
        <div className="boxCardUser">
           
                      <div>
                        
                            <div>
                              <div>Puntuación:</div>
                              <div>{rating}</div>
                              <div>Comentario:</div>
                              <div>{comment} </div>
                            </div>
                        
                        </div>
                      
                  
                
        </div>
    )
}
            // <div className="boxInfoUsers">
            //     <div className="orderDisplayFlex">
            //         <div className="titleUsersNames">Puntuación:</div>
            //         <div className="userData">{rating}</div>
            //     </div>
            //     <div className="orderDisplayFlex">
            //         <div className="titleUsersNames">Comentario:</div>
            //         <div className="userData">{comment}</div>
            //     </div>        
            // </div>