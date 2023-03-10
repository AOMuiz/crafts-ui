import { theme } from "../../utils/theme";
import { css } from "styled-components";

export const variantStyles = (variant = "primary") =>
  ({
    primary: css`
      background-color: ${theme.colors.primary[500]};
      &:hover {
        background-color: ${theme.colors.primary[600]};
      }
      &:active {
        background-color: ${theme.colors.primary[700]};
      }
      &:focus {
        background-color: ${theme.colors.primary[600]};
        outline: solid 2px ${theme.colors.primary[100]};
      }
      &:disabled {
        background-color: ${theme.colors.neutral[400]};
        cursor: not-allowed;
      }
    `,
    secondary: css`
      background-color: ${theme.colors.neutral[0]};
      color: ${theme.colors.neutral[700]};
      border: 1px solid ${theme.colors.neutral[400]};
      &:hover {
        border: 1px solid ${theme.colors.neutral[600]};
        color: ${theme.colors.neutral[800]};
      }
      &:focus {
        background-color: ${theme.colors.neutral[100]};
        border: 1px solid ${theme.colors.neutral[600]};
        outline: solid 2px ${theme.colors.primary[100]};
        color: ${theme.colors.neutral[800]};
      }
      &:active {
        background-color: ${theme.colors.neutral[100]};
        color: ${theme.colors.neutral[800]};
      }
      &:disabled {
        background-color: ${theme.colors.neutral[0]};
        cursor: not-allowed;
        color: ${theme.colors.neutral[400]};
      }
    `,
    success: css`
      background-color: #22a06b;
      &:hover {
        background-color: ${theme.colors.success[700]};
      }
      &:active {
        background-color: ${theme.colors.success[900]};
      }
      &:focus {
        outline: solid 2px ${theme.colors.success[0]};
        background-color: ${theme.colors.success[700]};
      }
      &:disabled {
        background-color: ${theme.colors.success[0]};
        cursor: not-allowed;
      }
    `,
    text: css`
      color: ${theme.colors.primary[500]};
      background-color: ${theme.colors.neutral[0]};
      &:hover {
        color: ${theme.colors.primary[600]};
      }
      &:active {
        color: ${theme.colors.primary[700]};
      }
      &:focus {
        outline: solid 2px ${theme.colors.primary[100]};
      }
      &:disabled {
        color: ${theme.colors.neutral[400]};
        cursor: not-allowed;
      }
    `,
    error: css`
      background: ${theme.colors.error[600]};
      &:hover {
        background: ${theme.colors.error[700]};
      }
      &:active {
        background: ${theme.colors.error[900]};
      }
      &:focus {
        outline: solid 2px ${theme.colors.error[0]};
        background: ${theme.colors.error[700]};
      }
      &:disabled {
        background: ${theme.colors.error[0]};
        cursor: not-allowed;
      }
    `,
  }[variant]);

export const sizeStyles = (size = "standard") => {
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
