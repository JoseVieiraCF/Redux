import React from 'react';

import './Card.css';

export default function Card(props){
    function getColor(props){
        if(props.Red) return "Red";
        if(props.Green) return "Green";
        if(props.Blue) return "Blue";
        if(props.Purple) return "Purple";
    }
    
    
    return(
        <div className={`Card ${getColor(props)}`}>
            <div className="Header">
                <span>{props.title}</span>
            </div>  
            <div className="Content">
                {props.children}
            </div>
        </div>
    );
}