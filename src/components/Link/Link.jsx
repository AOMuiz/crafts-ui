import { StyledLink } from "./styled";
import PropTypes from "prop-types";
import React from "react";

const Link = (props, ref) => {
  const { className, disabled = false, children, as = "a", href } = props;

  return (
    <StyledLink
      ref={ref}
      className={className}
      as={disabled ? "p" : as}
      href={href}
      disabled={disabled}
    >
      {children}
    </StyledLink>
  );
};

export default React.forwardRef(Link);

Link.propTypes = {
  disabled: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  as: PropTypes.elementType,
  href: PropTypes.string,
};
