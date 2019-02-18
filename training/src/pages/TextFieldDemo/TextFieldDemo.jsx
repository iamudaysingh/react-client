import React from 'react';
import TextField from '../../components/TextField';

const TextFieldDemo = () => (
  <>
    <h4> This is a disabled input </h4>
    <TextField value="Disabled input" disabled />
    <h4> A valid input </h4>
    <TextField value="Accessible" disabled={false} />
    <h4> Input with errors </h4>
    <TextField value="101" error="Could not be greater than 100" />
  </>
);
export default TextFieldDemo;
