import React from 'react';
import Card from '../Card/Card';

export default function Average(props){
    const max = props.max;
    const min = props.min;

    return(
        <Card title="Media dos Números" Purple>
            <div className="Media">
                <span>
                    <span>Resultado: </span>
                    <span>{(min+max)/2}</span>
                </span>
            </div>
            
        </Card>
    );
}