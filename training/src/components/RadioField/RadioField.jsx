import React from 'react';
import PropTypes from 'prop-types';
import style from './style';

const RadioField = (props) => {
  const { options, error, ...rest } = props;
  return (
    <>
      {options.map(option => (
        <div>
          <input type="radio" {...rest} name="Sports" value={option.value} style={style.list} />
          {option.value}
        </div>
      ))}
      <div>
        {error ? <p style={{ color: 'red' }}><p>{error}</p></p> : ''}
      </div>
    </>
  );
};

RadioField.propTypes = {
  options: PropTypes.arrayOf(PropTypes.objectOf),
  onchange: PropTypes.func,
  error: PropTypes.string,
};

RadioField.defaultProps = {
  onchange: () => {},
  error: '',
  options: [],
};

export default RadioField;
