import { createStore, combineReducers } from 'redux';

const reducers = combineReducers({
    numbers: function (state, action){
        console.log("numbers reducers", ' ', action);
        return {
            min: 7,
            max: 20
        }
    },
    names: function (state, action){
        console.log("names reducers");
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

