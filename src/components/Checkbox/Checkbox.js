import { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { theme } from "../../utils/theme";

const Checkbox = ({ id, label, checked, className, ...props }) => {
  const defaultChecked = checked ? checked : false;
  const [isChecked, setIsChecked] = useState(defaultChecked);
  return (
    <Wrapper className={className}>
      <Input
        id={id}
        type="checkbox"
        checked={isChecked}
        isOnChecked={isChecked}
        onChange={() => setIsChecked((prev) => !prev)}
        {...props}
      />
      {label && <Label htmlFor={id}>{label}</Label>}
      {/* <p>{isChecked ? "Selected" : "Unchecked"}</p> */}
    </Wrapper>
  );
};
export default Checkbox;

Checkbox.propTypes = {
  label: PropTypes.string,
  className: PropTypes.string,
  id: PropTypes.string,
  checked: PropTypes.bool,
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  input[type="checkbox"]:disabled + label {
    /* Neutral/N600 */
    color: #8f95b2;
  }
`;
const Label = styled.label`
  color: ${theme.colors.neutral[800]};
`;

const Input = styled.input`
  /* removing default appearance */
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  /* creating a custom design */
  width: 1.6em;
  height: 1.6em;
  background: ${theme.colors.neutral[0]};
  border: 1px solid ${theme.colors.neutral[400]};
  border-radius: 4px;
  outline: none;
  cursor: pointer;

  &:hover {
    border: 1px solid ${theme.colors.primary[700]};
  }

  &:active {
    border: 1px solid ${theme.colors.primary[500]};
  }

  &[type="checkbox"]:checked {
    background-color: ${theme.colors.primary[500]};
    border: 1px solid ${theme.colors.primary[500]};
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &:checked:active {
    border: 1px solid ${theme.colors.primary[700]};
    background-color: ${theme.colors.primary[700]};
  }

  &[type="checkbox"]:checked:hover {
    background-color: ${theme.colors.primary[600]};
    border: 1px solid ${theme.colors.primary[600]};
  }

  &[type="checkbox"]:checked::before {
    content: "✓";
    font-size: 1.5em;
    color: #fff;
  }

  &[type="checkbox"]:disabled {
    border-color: ${theme.colors.neutral[400]};
    background: ${theme.colors.neutral[200]};
  }

  /* &[type="checkbox"]:disabled:checked {
    border-color: ${theme.colors.neutral[400]};
    background: ${theme.colors.neutral[200]};
  } */

  &[type="checkbox"]:disabled:checked::before {
    content: "✓";
    font-size: 1.4em;
    color: ${theme.colors.neutral[400]};
  }

  &[type="checkbox"]:focus {
    outline: 2px solid ${theme.colors.primary[100]};
  }

  &[type="checkbox"]:focus:checked {
    outline: 2px solid ${theme.colors.primary[100]};
    background-color: ${theme.colors.primary[600]};
  }
`;
