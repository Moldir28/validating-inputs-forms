import useInput from '../hooks/use-input'

const BasicForm = (props) => {

  const {
    value: enteredName,
    hasError: nameInputHasError,
    valueChangeHandler: nameInputChangeHandler,
    inputBlurHandler: nameInputBlurHandler,
    isValid: nameInputIsValid,
    reset: nameValueReset
  } = useInput(value => value.trim() !== '');


  const {
    value: enteredLastName,
    hasError: lastNameInputHasError,
    valueChangeHandler: lastNameInputChangeHandler,
    inputBlurHandler: lastNameInputBlurHandler,
    isValid: lastNameInputIsValid,
    reset: lastNameValueReset
  } = useInput(value => value.trim() !== '');

  const {
    value: enteredEmail,
    hasError: emailInputHasError,
    valueChangeHandler: emailInputChangeHandler,
    inputBlurHandler: emailInputBlurHandler,
    isValid: emailInputIsValid,
    reset: emailValueReset
  } = useInput(value => value.includes('@'));


  let formIsValid = false;
  if (nameInputIsValid && lastNameInputIsValid && emailInputIsValid) {
    formIsValid = true;
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();
    nameValueReset();
    lastNameValueReset()
    emailValueReset()

    if (!nameInputIsValid && !lastNameInputIsValid && !emailInputIsValid) {
      return
    }
    console.log(enteredName);
    console.log(enteredLastName);
    console.log(enteredEmail);
  }

  const nameInputClasses = nameInputHasError ? 'form-control invalid' : 'form-control'
  const lastNameInputClasses = lastNameInputHasError ? 'form-control invalid' : 'form-control'
  const emailInputClasses = emailInputHasError ? 'form-control invalid' : 'form-control'



  return (
    <form onSubmit={formSubmitHandler}>
      <div className='control-group'>
        <div className={nameInputClasses}>
          <label htmlFor='name' >First Name</label>
          <input type='text' id='name' value={enteredName} onChange={nameInputChangeHandler} onBlur={nameInputBlurHandler} />
          {nameInputHasError && <p>Enter first name</p>}
        </div>
        <div className={lastNameInputClasses}>
          <label htmlFor='name'>Last Name</label>
          <input type='text' id='name' value={enteredLastName} onChange={lastNameInputChangeHandler} onBlur={lastNameInputBlurHandler} />
          {nameInputHasError && <p>Enter last name</p>}
        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor='name'>E-Mail Address</label>
        <input type='email' id='name' value={enteredEmail} onChange={emailInputChangeHandler} onBlur={emailInputBlurHandler} />
        {nameInputHasError && <p>Enter your email</p>}
      </div>
      {nameInputHasError && lastNameInputHasError && emailInputHasError && <p>Input values cannot be empty</p>}
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
