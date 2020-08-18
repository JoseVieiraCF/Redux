
//Action creator

export function changeMinNumber(newNumber){
    return {
        type: 'NEW_MIM_NUMBER',
        payload: newNumber
    }
}

export function changeMaxNumber(newNumber){
    return {
        type: 'NEW_MAX_NUMBER',
        payload: newNumber
    }

}