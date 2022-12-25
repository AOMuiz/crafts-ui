import styled from "styled-components";
import { getSpinnerWidth } from "./utils";
import PropTypes from "prop-types";
import { theme } from "../../utils/theme";

export const StyledSpinner = styled.span`
  box-sizing: border-box;
  display: block;
  border: ${(pr) => getSpinnerWidth(pr.size)}px solid transparent;
  border-top: ${(pr) => getSpinnerWidth(pr.size)}px solid
    ${(pr) => (pr.light ? theme.colors.neutral[10] : theme.colors.primary[600])};
  border-right: ${(pr) => getSpinnerWidth(pr.size)}px solid
    ${(pr) => (pr.light ? theme.colors.neutral[10] : theme.colors.primary[600])};
  border-bottom: ${(pr) => getSpinnerWidth(pr.size)}px solid
    ${(pr) => (pr.light ? theme.colors.neutral[10] : theme.colors.primary[600])};
  border-radius: 50%;
  width: ${(pr) => pr.size}px;
  height: ${(pr) => pr.size}px;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

StyledSpinner.propTypes = {
  size: PropTypes.number,
  light: PropTypes.bool,
};
