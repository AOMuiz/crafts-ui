import styled, { css } from "styled-components";
import { variantStyles, sizeStyles } from "./ButtonUtils";

const Button = ({ text, variant, size, ...delegated }) => {
  return (
    <OButton variant={variant} size={size} {...delegated}>
      {text}
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
`;

export default Button;

// OButton.defaultProps = {
//   variant: "primary",
// };
