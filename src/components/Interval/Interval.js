import './Interval.css';
import React from 'react';
import Card from '../Card/Card';

export default function Interval(props){
    const {max, min} = props;
    return(
        <Card title="Intervalo de Números" Red>
            <div className="Intervalo">
                <span>
                    <strong>Mínimo</strong>
                    <input type="number" onChange={e => props.onMinChanged(+e.target.value)}/>
                </span>

                <span>
                    <strong>Máximo</strong>
                    <input type="number" onChange={e => props.onMaxChanged(+e.target.value)} />
                </span>
            </div>
            
        </Card>
    );
}