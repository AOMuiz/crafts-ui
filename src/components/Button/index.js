import PropTypes from "prop-types";
import styled from "styled-components";
import { colorsFn, spaceFn } from "../../utils/styledFunctions";
import { variantStyles, sizeStyles } from "./ButtonUtils";

const Button = ({ label, variant, size, className, ...delegated }) => {
  return (
    <OButton variant={variant} size={size} className={className} {...delegated}>
      {label}
    </OButton>
  );
};

const OButton = styled.button`
  color: white;
  border-radius: 4px;
  min-width: fit-content;
  box-sizing: border-box;
  font-weight: 600;
  border: none;
  margin: 5px;
  cursor: pointer;

  ${({ variant }) => variantStyles(variant)}
  ${({ size }) => sizeStyles(size)}
  ${colorsFn}
  ${spaceFn}
`;

export default Button;

Button.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  variant: PropTypes.oneOf([
    "primary",
    "secondary",
    "error",
    "success",
    "text",
    "error",
  ]),
  /**
   * What background color to use
   */
  bg: PropTypes.string,
  /**
   * What text color to use
   */
  color: PropTypes.string,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(["small", "standard", "large"]),
  /**
   * Should the button be disabled?
   */
  disabled: PropTypes.bool,
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  bg: null,
  variant: "primary",
  size: "standard",
  onClick: undefined,
};
