import React from 'react';
import PropTypes from 'prop-types';
import style from './style';

const SelectField = (props) => {
  const {
    value, options, error, defaultText, ...rest
  } = props;

  return (
    <>
      <select {...rest} style={style.list}>
        <option disabled selected>{defaultText}</option>
        {options.map(option => (
          <option value={option.value}>{option.value}</option>
        ))}
      </select>
      {error ? <p style={{ color: 'red' }}><p>{error}</p></p> : ''}
    </>
  );
};
SelectField.propTypes = {
  options: PropTypes.arrayOf(PropTypes.objectOf),
  value: PropTypes.string.isRequired,
  onchange: PropTypes.func.isRequired,
  error: PropTypes.string,
  defaultText: PropTypes.string,
};
SelectField.defaultProps = {
  options: [],
  error: '',
  defaultText: 'Select',
};
export default SelectField;
