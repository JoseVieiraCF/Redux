import React from 'react';
import Card from '../Card/Card';
import { connect } from 'react-redux';

function Average(props){
    const {min, max} = props;

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

function mapStateToProps(state ){
    return {
        min: state.numbers.min,
        max: state.numbers.max,
    }
}


export default connect(mapStateToProps)(Average);