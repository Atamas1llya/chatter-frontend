import React from 'react';
import FieldGroup from '../../../components/FieldGroup';

const PhoneForm = () => (
  <form className="login-form">
    <FieldGroup
      type="number"
      label="Phone number"
      placeholder="380000000000"
    />
    <FieldGroup
      type="password"
      label="Password"
    />
  </form>
)

export default PhoneForm;
