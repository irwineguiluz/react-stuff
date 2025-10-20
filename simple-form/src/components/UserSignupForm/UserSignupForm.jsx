import Input from '../Input/Input';
import useInput from '../../hooks/useInput';

import { hasMinLength, isEmail, isNotEmpty } from '../../util/validation';

function UserSignupForm() {
  const {
    value: emailValue,
    hasError: emailHasError,
    handleInputBlur: handleEmailBlur,
    handleInputChange: handleEmailChange,
  } = useInput('', (value) => isNotEmpty(value) && isEmail(value));

  const {
    value: firstNameValue,
    hasError: firstNameHasError,
    handleInputBlur: handleFirstNameBlur,
    handleInputChange: handleFirstNameChange,
  } = useInput('', (value) => isNotEmpty(value) && hasMinLength(value, 3));

  const {
    value: lastNameValue,
    hasError: lastNameHasError,
    handleInputBlur: handleLastNameBlur,
    handleInputChange: handleLastNameChange,
  } = useInput('', (value) => isNotEmpty(value) && hasMinLength(value, 3));

  function handleSubmit(e) {
    e.preventDefault();
    console.log(emailValue, firstNameValue, lastNameValue);
  }

  return (
    <form method="POST" onSubmit={handleSubmit}>
      <Input
        id="email"
        name="email"
        label="E-mail"
        value={emailValue}
        type="email"
        placeholder="Your e-mail address"
        required
        onChange={handleEmailChange}
        onBlur={handleEmailBlur}
        error={emailHasError && 'Enter a valid e-mail address.'}
      />
      <Input
        id="firstName"
        name="firstName"
        label="First name"
        value={firstNameValue}
        placeholder="Your first name"
        onChange={handleFirstNameChange}
        onBlur={handleFirstNameBlur}
        error={firstNameHasError && 'Enter a valid first name.'}
      />
      <Input
        id="lastName"
        name="lastName"
        label="Last name"
        value={lastNameValue}
        placeholder="Your last name"
        onChange={handleLastNameChange}
        onBlur={handleLastNameBlur}
        error={lastNameHasError && 'Enter a valid last name.'}
      />
      <button>Sign Up</button>
    </form>
  );
}

export default UserSignupForm;
