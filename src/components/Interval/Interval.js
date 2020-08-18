import './Interval.css';
import React from 'react';
import Card from '../Card/Card';
import { connect } from 'react-redux';
import { changeMinNumber } from '../../Store/actions/numbers';

function Interval(props){
    props.changeNumber(100);
    const {max, min} = props;
    return(
        <Card title="Intervalo de Números" Red>
            <div className="Intervalo">
                <span>
                    <strong>Mínimo</strong>
                    <input type="number" value={min} onChange={e => props.onMinChanged(+e.target.value)}/>
                </span>

                <span>
                    <strong>Máximo</strong>
                    <input type="number" value={max} onChange={e => props.onMaxChanged(+e.target.value)} />
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

function mapActionCreatorsToProps(dispatch){
    return {
        changeNumber(newNumber){
            const action = changeMinNumber(newNumber)
            dispatch(action)
        },
    }
}


export default connect(mapStateToProps, mapActionCreatorsToProps)(Interval)