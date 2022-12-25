import React from "react";
import { StyledSpinner } from "./styled";
import PropTypes from "prop-types";

const Spinner = (props, ref) => {
  const { className, size = 30, light = false } = props;

  return (
    <StyledSpinner ref={ref} className={className} size={size} light={light} />
  );
};

export default React.forwardRef(Spinner);

StyledSpinner.propTypes = {
  size: PropTypes.number,
  light: PropTypes.bool,
  className: PropTypes.string,
};
