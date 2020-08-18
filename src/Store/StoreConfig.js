import { createStore, combineReducers } from 'redux';

const reducers = combineReducers({
    numbers: function (state = {min:7,max:20} , action){
        switch (action.type) {
            case 'NEW_MIM_NUMBER':
                return {
                    ...state,
                    min: action.payload
                }
        
            default:
                return state;
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

