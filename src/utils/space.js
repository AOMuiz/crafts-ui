import { css } from "styled-components";
import { theme } from "./theme";

export const space = (size = "standard") => {
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
