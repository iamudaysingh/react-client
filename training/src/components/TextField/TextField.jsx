
import React from 'react';
import PropTypes from 'prop-types';
import style from './style';

const TextField = (props) => {
  const { error, ...rest } = props;
  const newError = error ? style.error : {};
  return (
    <>
      <input type="text" {...rest} style={{ ...style.basic, ...newError }} />
      {error ? <p style={{ color: newError.color }}>{error}</p> : ''}
    </>
  );
};
TextField.propTypes = {
  error: PropTypes.string,
};
TextField.defaultProps = {
  error: '',
};
export default TextField;
