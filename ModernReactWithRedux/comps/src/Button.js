import React from "react";
import PropTypes from "prop-types";

const Button = ({ children, primary, secondary, success, warning, danger }) => {
  return <button>{children}</button>;
};

export default Button;
