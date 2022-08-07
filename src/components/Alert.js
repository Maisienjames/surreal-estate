/* eslint-disable no-console */
import React from "react";
import PropTypes from "prop-types";

const Alert = ({ message, success }) => {
  console.log(message, "message");
  if (!message) return null;

  return (
    <div className={`alert alert-${success ? "success" : "error"}`}>
      {message}
    </div>
  );
};

export default Alert;

Alert.defaultProps = {
  message: null,
  success: false,
};

Alert.propTypes = {
  message: PropTypes.string,
  success: PropTypes.bool,
};
