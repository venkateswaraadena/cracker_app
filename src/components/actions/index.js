import { ADD_NUMBERS, DIVIDE_NUMBERS,MULTIPLY_NUMBERS,SUBSTRACT_NUMBERS,
         FIRST_VALUE,SECOND_VALUE } from '../constants';


export function addNumber(payload) {
    return { type : ADD_NUMBERS, payload }
};

export function divideNumber(payload) {
    return { type : DIVIDE_NUMBERS, payload }
};

export function multiplyNumber(payload) {
    return { type : MULTIPLY_NUMBERS, payload }
};

export function substractNumber(payload) {
    return { type : SUBSTRACT_NUMBERS, payload }
};

export function firstValue(payload) {
    return {type : FIRST_VALUE,payload}
};

export function secondValue(payload) {
    return {type : SECOND_VALUE,payload}
};

