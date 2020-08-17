import React from 'react';
import Card from '../Card/Card';

export default function Sum(props){
    const max = props.max;
    const min = props.min;
    return(
        <Card title="Soma dos Números" Green>
            <div className="Sum">
                <span>
                    <span>Resultado: </span>
                    <span>{max+min}</span>
                </span>
            </div>
            
        </Card>
    );
}