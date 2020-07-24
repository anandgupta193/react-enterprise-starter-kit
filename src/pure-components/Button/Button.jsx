import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ value }) => <button type="button">{value}</button>;

Button.defaultProps = {
  value: '',
};

Button.propTypes = {
  value: PropTypes.string,
};

export default Button;
