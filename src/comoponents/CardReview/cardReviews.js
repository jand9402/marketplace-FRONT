import React from "react";
import './cardsReviews.css'


export default function CardReviews({ _id, rating, comment}) {

    return (
        <div className="boxCardUser">
            <div className="boxInfoUsers">
                <div className="orderDisplayFlex">
                    <div className="titleUsersNames">Puntuación:</div>
                    <div className="userData">{rating}</div>
                </div>
                <div className="orderDisplayFlex">
                    <div className="titleUsersNames">Comentario:</div>
                    <div className="userData">{comment}</div>
                </div>        
            </div>
        </div>
    )
}