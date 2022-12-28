// import { PropTypes } from "prop-types";
// import { theme } from "./theme";
import { css } from "styled-components";

export const colorsFn = css`
  color: ${(props) => props.color && props.color};
  background: ${(props) => props.bg && props.bg};
  background-color: ${(props) => props.bgColor && props.bgColor};
`;

export const gradientFn = css`
  background-clip: ${(props) => props.bgClip && props.bgClip};
  background-image: ${(props) => props.bgGradient && props.bgGradient};
`;

export const backgroundFn = css`
  background: ${(props) => props.bg && props.bg};
  background-image: ${(props) => props.bgImage && props.bgImage};
  background-size: ${(props) => props.bgSize && props.bgSize};
  background-position: ${(props) => props.bgPosition && props.bgPosition};
  background-repeat: ${(props) => props.bgRepeat && props.bgRepeat};
  background-attachment: ${(props) => props.bgAttachment && props.bgAttachment};
`;

export const spaceFn = css`
  margin: ${(props) => props.m && props.m};
  /** Margin on top */
  margin-top: ${(props) => props.mt && props.mt};
  /** Margin on right */
  margin-right: ${(props) => props.mr && props.mr};
  /** Margin on end(right or left) for RTL support */
  margin-inline-end: ${(props) => props.me && props.me};
  /** Margin on bottom */
  margin-bottom: ${(props) => props.mb && props.mb};
  /** Margin on left */
  margin-left: ${(props) => props.ml && props.ml};
  /** Margin on start(right or left) for RTL support */
  margin-inline-start: ${(props) => props.ms && props.ms};
  /** Margin on left and right */
  margin-inline: ${(props) => props.mx && props.mx};
  /** Margin on top and bottom */
  margin-block: ${(props) => props.my && props.my};
  /** Padding on top, left, bottom and right */
  padding: ${(props) => props.p && props.p};
  /** Padding on top */
  padding-top: ${(props) => props.pt && props.pt};
  /** Padding on right */
  padding-right: ${(props) => props.pr && props.pr};
  /** Margin on start(right or left) for RTL support */
  padding-inline-end: ${(props) => props.pe && props.pe};
  /** Padding on bottom */
  padding-bottom: ${(props) => props.pb && props.pb};
  /** Padding on left */
  padding-left: ${(props) => props.pl && props.pl};
  /** Margin on start(right or left) for RTL support */
  padding-inline-start: ${(props) => props.ps && props.ps};
  /** Padding on left and right */
  padding-inline: ${(props) => props.px && props.px};
  /** Padding on top and bottom */
  padding-block: ${(props) => props.py && props.py};
`;

export let fontSizesFn = css`
  font-size: ${(props) => props.fontSize && props.fontSize};
  font-weight: ${(props) => props.weight && props.weight};
`;
