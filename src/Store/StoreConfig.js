import { createStore, combineReducers } from 'redux';

const reducers = combineReducers({
    numbers: function (state = {min:0,max:0} , action){
        switch (action.type) {
            case 'NEW_MIM_NUMBER':
                return {
                    ...state,
                    min: action.payload
                }

            case 'NEW_MAX_NUMBER':
                return{
                    ...state,
                    max: action.payload
                }
        
            default:
                return state;
        }
    }
});


export default function storeConfig(){
    return createStore(reducers);
}

