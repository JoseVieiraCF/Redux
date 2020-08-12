import './Interval.css';
import React from 'react';
import Card from '../Card/Card';

export default function Interval(props){
    return(
        <Card title="Intervalo de Números" Red>
            <div className="Intervalo">
                <span>
                    <strong>Mínimo</strong>
                    <input type="number" value={0} readOnly />
                </span>

                <span>
                    <strong>Máximo</strong>
                    <input type="number" value={10} readOnly />
                </span>
            </div>
            
        </Card>
    );
}