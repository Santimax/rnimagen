import React from "react";
import "./Card.css";
import coffe from "./imgs/coffee1.jpeg";

const Card = () => {
    
    return (
        <div className="card">
            <div className="cardcontent">
            <img className='images' src={coffe}/>
            </div>
            <div className="cardtext">
            <h2 >Mocha</h2>
            </div>
        </div>
    );
    }

    export default Card;

