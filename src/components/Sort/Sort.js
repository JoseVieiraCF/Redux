import React from 'react';
import Card from '../Card/Card';

export default function Sort(props){
    const { max, min} = props;
    const random = parseInt(Math.random() * (max-min)) + min;
    return(
        <Card title="Sorteio dos Números" Blue>
            <div className="Sort">
                <span>
                    <span>Resultado: </span>
                    <span>{random}</span>
                </span>
            </div>
            
        </Card>
    );
}