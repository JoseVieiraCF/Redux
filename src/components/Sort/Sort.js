import React from 'react';
import Card from '../Card/Card';
import { connect } from 'react-redux'; 

function Sort(props){
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

function mapStateToProps(state){
    return {
        min: state.numbers.min,
        max: state.numbers.max
    }
}

export default connect(mapStateToProps)(Sort);