import React from 'react';
import { Link } from 'react-router-dom';
import FieldGroup from '../../../../../components/FieldGroup';
import { Button } from 'react-bootstrap';

const RegisterForm = ({ onSubmit, changeMode }) => (
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

    <Button bsStyle="primary" type="submit">Register</Button>
    <Button bsStyle="link" onClick={() => changeMode('login')}>Already have account?</Button>
  </form>
)

export default RegisterForm;
