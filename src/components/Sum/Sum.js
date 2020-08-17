import React from 'react';
import Card from '../Card/Card';
import { connect } from 'react-redux';

function Sum(props){
    const { min, max } = props;
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

function mapStateToProps(state){
    return {
        min: state.numbers.min,
        max: state.numbers.max
    }
}

export default connect(mapStateToProps)(Sum);