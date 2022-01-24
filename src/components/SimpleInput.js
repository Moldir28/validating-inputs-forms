import useInput from '../hooks/use-input'

const SimpleInput = (props) => {
  const { value: enteredName,
    hasError: nameInputHasError,
    valueChangeHandler: nameInputChangeHandler,
    inputBlurHandler: nameInputBlurHandler,
    isValid: enteredNameIsValid,
    reset: resetNameInput
  } = useInput(value => value.trim() !== "");


  const { value: enteredEmail,
    hasError: emailInputHasError,
    valueChangeHandler: emailInputChangeHandler,
    inputBlurHandler: emailInputBlurHandler,
    isValid: enteredEmailIsValid,
    reset: resetEmailInput
  } = useInput(value => value.includes('@'));


  let formIsValid = false;
  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }



  const formSubmitHandler = (event) => {
    event.preventDefault();

    resetNameInput();
    resetEmailInput();

    if (!enteredNameIsValid && !enteredEmailIsValid) {
      return
    }
    console.log(enteredName)
  }


  const nameInputClasses = nameInputHasError && emailInputHasError ? 'form-control invalid' : 'form-control'

  return (
    <form onSubmit={formSubmitHandler} >
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' onChange={nameInputChangeHandler} value={enteredName}
          onBlur={nameInputBlurHandler} />
        {nameInputHasError && <p className='error-text'>Name must not be empty</p>}

        <label htmlFor='email'>Your Email</label>
        <input type='email' id='email' onChange={emailInputChangeHandler} value={enteredEmail}
          onBlur={emailInputBlurHandler} />
        {emailInputHasError && <p className='error-text'>Email must not be empty</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form >
  );
};

export default SimpleInput;

