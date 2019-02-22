import React from 'react';
import PropTypes from 'prop-types';
import buttonStyle from './style';

class Button extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const {
      color, style, value, ...rest
    } = this.props;
    return (
      <input
        type="button"
        value={value}
        {...rest}
        style={buttonStyle.base}
      />
    );
  }
}
Button.propTypes = {
  color: PropTypes.string,
  value: PropTypes.string.isRequired,
  style: PropTypes.arrayOf,
};
Button.defaultProps = {
  color: 'default',
  style: {},
};
export default Button;
