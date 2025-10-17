function UserSignupForm() {
  function handleSubmit(e) {
    e.preventDefault();
    console.log('hello');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" placeholder="Your email address" required />
      <input type="text" placeholder="Your first name" name="user-firstname" />
      <input type="text" placeholder="Your last name" name="user-lastname" />
      <input type="submit" value="Sign up" />
    </form>
  );
}

export default UserSignupForm;
