import { useState } from 'react'

//all commented part is the code applying useReducer()
// import {useReducer} from 'react';


// const initialInputState = {
//   value: '';
//   isTouched: false;
// }

// const inputStateReducer = (state, action) => {
//if(action.type === "INPUT") {
// return { value:action.value , isTouched: state.isTouched};
//  } if (action.type === "BLUR") {
//  return { isTouched: true, value:action.value };
// }  if (action.type === "BLUR") {
//  return { isTouched: false, value: "" };
// return initialInputState
//}

function useInput(validatedValue) {

    // const[inputState, dispatch] = useReducer(inputStateReducer, initialInputState)

    // const valueIsValid = validateValue(inputState.value);
    // const hasError = !valueIsValid && inputState.isTouched;

    // const valueChangeHandler = (event) => {
    // dispatch({type: 'INPUT', value: event.target.value});
    //}

    // const valueBlueHandler = (event) => {
    // dispatch({type: 'BLUR'});
    //}

    // const reset = () => {
    // dispatch({type: 'RESET'});
    //}


    const [enteredValue, setEnteredValue] = useState('');
    const [isTouched, setIsTouched] = useState(false);

    const valueIsValid = validatedValue(enteredValue);
    const hasError = !valueIsValid && isTouched;


    const valueChangeHandler = (event) => {
        setEnteredValue(event.target.value);
    }

    const inputBlurHandler = (event) => {
        setIsTouched(true);
    }

    const reset = () => {
        setEnteredValue('');
        setIsTouched(false);
    }

    return {
        value: enteredValue, hasError, valueChangeHandler, inputBlurHandler, isValid: valueIsValid, reset
    }

    //     return {
    //         value: inputState.value, hasError, valueChangeHandler, inputBlurHandler, isValid: valueIsValid, reset
    //     }
}

export default useInput
