// import { PropTypes } from "prop-types";
// import { theme } from "./theme";
import { css } from "styled-components";

export const colorsFn = css`
  color: ${(props) => props.color && props.color};
  background-color: ${(props) => props.bg && props.bg};
`;

export const spaceFn = (size = "standard") => {
  return {
    standard: css`
      padding: 8px 28px;
      height: 40px;
      font-size: 1rem;
    `,
    small: css`
      /* width: 75px; */
      height: 32px;
      padding: 4px 20px;
      font-size: ${14 / 16}rem;
    `,
    large: css`
      padding: 16px 40px;
      font-size: ${18 / 16}rem;
    `,
  }[size];
};

export let fontSizesFn = css`
  color: ${(props) => (props.color ? props.color : "initial")};
  background-color: ${(props) => (props.bg ? props.bg : "initial")};
`;
