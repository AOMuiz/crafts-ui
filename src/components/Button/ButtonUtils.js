import { theme } from "../../utils/theme";
import { css } from "styled-components";

export const variantStyles = (variant = "primary") =>
  ({
    primary: css`
      color: white;
      background: ${theme.colors.primary[500]};
      &:hover {
        background: ${theme.colors.primary[600]};
      }
      &:active {
        background: ${theme.colors.primary[700]};
      }
      &:focus {
        background: ${theme.colors.primary[600]};
        border: 2px solid ${theme.colors.primary[100]};
      }
      &:disabled {
        background: ${theme.colors.neutral[400]};
        cursor: not-allowed;
      }
    `,
    secondary: css`
      background: ${theme.colors.neutral[0]};
      color: ${theme.colors.neutral[700]};
      border: 1px solid ${theme.colors.neutral[400]};
      &:hover {
        border: 1px solid ${theme.colors.neutral[600]};
        color: ${theme.colors.neutral[800]};
      }
      &:focus {
        background: ${theme.colors.neutral[600]};
        border: 2px solid ${theme.colors.primary[100]};
        color: ${theme.colors.neutral[800]};
      }
      &:active {
        background: ${theme.colors.neutral[100]};
        color: ${theme.colors.neutral[800]};
      }
      &:disabled {
        background: ${theme.colors.neutral[0]};
        cursor: not-allowed;
        color: ${theme.colors.neutral[400]};
      }
    `,
    success: css`
      background: #22a06b;
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
        border: 2px solid ${theme.colors.error[0]};
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
    `,
    small: css`
      /* width: 75px; */
      height: 32px;
      padding: 4px 20px;
      font-size: 14px;
    `,
    large: css`
      padding: 16px 40px;
      font-size: 18px;
    `,
  }[size];
};
