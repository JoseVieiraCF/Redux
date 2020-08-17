import { createStore, combineReducers } from 'redux';

const reducers = combineReducers({
    numbers: function (state, action){
        //console.log(state, ' ', action)
        return {
            min: 7,
            max: 7
        }
    },
    names: function (state, action){
        //console.log(state, ' ', action)
        return [
            'Joseph',
            'Chris',
            'James'
        ]
    }
});


export default function storeConfig(){
    return createStore(reducers);
}

