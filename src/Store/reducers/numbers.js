const initialState = {
    min:0,
    max:0
}

export default function (state = initialState , action){
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