import React from 'react';
import { Button } from 'react-bootstrap';
import FieldGroup from '../../../../../components/FieldGroup';

const LoginForm = ({ onSubmit, changeMode }) => (
  <form
    className="login-form"
    onSubmit={onSubmit}
  >
    <FieldGroup
      type="email"
      name="email"
      label="Email"
      placeholder="abracadabra@gmail.com"
      required
    />
    <FieldGroup
      type="password"
      name="password"
      label="Password"
      required
    />

    <Button bsStyle="primary" type="submit">Login</Button>
    <Button bsStyle="link" onClick={() => changeMode('register')}>First time here?</Button>
  </form>
);

export default LoginForm;
