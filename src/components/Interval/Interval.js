import './Interval.css';
import React from 'react';
import Card from '../Card/Card';
import { connect } from 'react-redux';
import { changeMinNumber, changeMaxNumber } from '../../Store/actions/numbers';

function Interval(props){
    
    const {max, min} = props;
    return(
        <Card title="Intervalo de Números" Red>
            <div className="Intervalo">
                <span>
                    <strong>Mínimo</strong>
                    <input type="number" value={min} onChange={e => props.changeMinNumber(+e.target.value)}/>
                </span>

                <span>
                    <strong>Máximo</strong>
                    <input type="number" value={max} onChange={e => props.changeMaxNumber(+e.target.value)} />
                </span>
            </div>
            
        </Card>
    );
}

function mapStateToProps(state){
    return {
        min:state.numbers.min,
        max:state.numbers.max
    }
}

function mapDispatchToProps(dispatch){
    return {
        changeMinNumber(newMinNumber){
            const action = changeMinNumber(newMinNumber)
            dispatch(action)
        },
        changeMaxNumber(newMaxNumber){
            const action = changeMaxNumber(newMaxNumber);
            dispatch(action)
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Interval)