import React from "react";
import { StyledSkeleton } from "./styled";
import PropTypes from "prop-types";

const Skeleton = (props, ref) => {
  const { className, width = 100, height = 100, borderRadius = "none" } = props;

  return (
    <StyledSkeleton
      ref={ref}
      className={className}
      width={width}
      height={height}
      borderRadius={borderRadius}
    />
  );
};

export default React.forwardRef(Skeleton);

Skeleton.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  className: PropTypes.string,
  borderRadius: PropTypes.string,
};

Skeleton.defaultProps = {
  width: 100,
  height: 100,
  borderRadius: "none",
};
