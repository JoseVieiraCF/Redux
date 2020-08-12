import React from 'react';
import Card from '../Card/Card';

export default function Sum(props){
    return(
        <Card title="Soma dos Números" Green>
            <div className="Sum">
                <span>
                    <span>Resultado:</span>
                    <span>0</span>
                </span>
            </div>
            
        </Card>
    );
}