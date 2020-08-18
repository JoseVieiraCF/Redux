import { createStore, combineReducers } from 'redux';
import numerosReducers from './reducers/numbers';

const reducers = combineReducers({
    numbers: numerosReducers
});


export default function storeConfig(){
    return createStore(reducers);
}

