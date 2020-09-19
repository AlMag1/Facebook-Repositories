import React from 'react';
import { Input as ReactstrapInput } from 'reactstrap';

const Input = ({ onChange, className, placeholder, ...rest }) => {
  return (
    <ReactstrapInput
      placeholder={placeholder}
      className={className}
      onChange={onChange}
      {...rest}
    />
  );
};

export default Input;
