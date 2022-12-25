import PropTypes from "prop-types";
import styled from "styled-components";
import { theme } from "../../utils/theme";

export const StyledLink = styled.a`
  display: inline-block;
  box-sizing: border-box;
  color: ${theme.colors.primary[600]};
  cursor: pointer;
  text-decoration: none;
  margin: 0;
  padding: 0;
  font-size: 15px;

  &:active,
  &:visited {
    color: ${theme.colors.primary[600]};
    text-decoration: none;
  }
  &:focus,
  &:hover {
    color: #6874cc;
  }

  ${(pr) =>
    pr.disabled
      ? `
        cursor: not-allowed;
        &, &:focus, &:visited, &:hover {
            color: #5e5e5e;
        }
    `
      : ""}
`;

StyledLink.propTypes = {
  disabled: PropTypes.bool,
};
