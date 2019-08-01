import { ADD_NUMBERS, DIVIDE_NUMBERS,MULTIPLY_NUMBERS,SUBSTRACT_NUMBERS,
         FIRST_VALUE,SECOND_VALUE } from '../constants';

const initialState = {
    firstvalue : "",
    secondvalue : "",
    results : ""
};

function rootReducer (state = initialState,action) {
    if(action.type === FIRST_VALUE) {
        return Object.assign({}, state,{
            firstvalue : parseInt(action.payload.firstValue)
        });
    }
    if(action.type === SECOND_VALUE) {
        return Object.assign({}, state,{
            secondvalue : parseInt(action.payload.secondValue)
        });
    }
    if(action.type === ADD_NUMBERS) {
        return Object.assign({}, state,{
            results : parseInt(action.payload.firstvalue) + parseInt(action.payload.secondvalue)
        });
    }
    if (action.type === DIVIDE_NUMBERS) {
        return Object.assign({}, state, {
            results: parseInt(action.payload.firstvalue) % parseInt(action.payload.secondvalue)
        });
      }
    if(action.type === MULTIPLY_NUMBERS) {
        return Object.assign({}, state, {
            results: parseInt(action.payload.firstvalue) * parseInt(action.payload.secondvalue)
        });
    }
    if(action.type === SUBSTRACT_NUMBERS) {
        return Object.assign({}, state, {
            results: parseInt(action.payload.firstvalue) - parseInt(action.payload.secondvalue)
        });
    }
    return state;
}

export default rootReducer;