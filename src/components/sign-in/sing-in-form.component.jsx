import { useState } from 'react';
import Button from '../button/button.component';
import FormInput from '../form-input/form-input.component';

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password, confirmPassword } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert('Password should be different!');
      return;
    }

    try {
      //   const { user } = await createAuthUserWithEmailAndPassword(
      //     email,
      //     password
      //   );
      //   const userDocRef = await createUserDocumentFromAuth({
      //     ...user,
      //     displayName: displayName,
      //   });
    } catch (error) {
      console.log('user creation encountered error', error);
    }

    resetFormFields();
  };

  return (
    <div>
      <h1>Sign up with your email and password</h1>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          required
          type="email"
          name="email"
          onChange={handleChange}
          value={email}
        />

        <FormInput
          label="Password"
          required
          type="password"
          name="password"
          onChange={handleChange}
          value={password}
        />
        <Button buttonType="google">Sign In</Button>
      </form>
    </div>
  );
};

export default SignInForm;
