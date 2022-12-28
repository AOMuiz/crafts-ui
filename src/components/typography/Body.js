import * as React from "react";
import styled, { css } from "styled-components";

// type FontSize = 'body' | 'bodyS' | 'bodyXS' | 'bodyXXS'
// type FontWeight = 'regular' | 'medium' | 'bold' | 'black'

const BodyBase = styled.p(
  ({ size, fontWeight, color: textColor, theme: { typography, color } }) => css`
    display: block;
    color: ${textColor};
    font-weight: ${fontWeight};
    font-size: ${size};
  `
);

// BodyBase.DefaultProps = {
//   className: string,
//   size: 'S' | 'XS' | 'XXS',
//   fontWeight: 'regular' | 'medium' | 'bold' | 'black',
//   type: 'span' | 'p' | 'label' | 'figcaption',
//   color: string,
//   children: React.ReactNode | string,
// }

export const Body = ({
  size = "",
  fontWeight = "regular",
  type = "p",
  color,
  children,
  className,
  ...props
}) => (
  <BodyBase
    as={type}
    size={size}
    color={color}
    fontWeight={fontWeight}
    className={className}
    {...props}
  >
    {children}
  </BodyBase>
);
