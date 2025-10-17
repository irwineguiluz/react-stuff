import { useState } from 'react';
import Input from '../Input/Input';

function UserSignupForm() {
  const [formData, setFormData] = useState({
    email: '',
    firstname: '',
    lastname: '',
  });

  function handleInputChange(e) {
    const { name, value } = e.target;

    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);
  }

  return (
    <form method="POST" onSubmit={handleSubmit}>
      <Input
        type="email"
        placeholder="Your email address"
        name="email"
        required
        onChange={(e) => handleInputChange(e, 'email')}
      />
      <Input
        placeholder="Your first name"
        name="firstname"
        onChange={(e) => handleInputChange(e, 'firstName')}
      />
      <Input
        placeholder="Your last name"
        name="lastname"
        onChange={(e) => handleInputChange(e, 'lastName')}
      />
      <input type="submit" value="Sign up" />
    </form>
  );
}

export default UserSignupForm;
