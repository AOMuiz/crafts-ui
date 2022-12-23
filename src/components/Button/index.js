import PropTypes from "prop-types";
import styled from "styled-components";
import { variantStyles, sizeStyles } from "./ButtonUtils";

const Button = ({ label, variant, size, ...delegated }) => {
  return (
    <OButton variant={variant} size={size} {...delegated}>
      {label}
    </OButton>
  );
};

const OButton = styled.button`
  /* display: flex;
  justify-content: center;
  align-items: center; */
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
`;

export default Button;

Button.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  variant: PropTypes.oneOf(["primary", "secondary", "error", "success"]),
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
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
  backgroundColor: null,
  variant: "primary",
  size: "standard",
  onClick: undefined,
};
