// import { PropTypes } from "prop-types";
// import { theme } from "./theme";
import { css } from "styled-components";

export const colorsFn = css`
  color: ${(props) => props.color && props.color};
  background-color: ${(props) => props.bg && props.bg};
`;

export const spaceFn = css`
  margin: ${(props) => props.m && props.m};
  /** Margin on top */
  margin-top: ${(props) => props.m && props.m};
  /** Margin on right */
  margin-right: ${(props) => props.mr && props.mr};
  /** Margin on bottom */
  margin-bottom: ${(props) => props.mb && props.mb};
  /** Margin on left */
  margin-left: ${(props) => props.ml && props.ml};
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
  /** Padding on bottom */
  padding-bottom: ${(props) => props.pb && props.pb};
  /** Padding on left */
  padding-left: ${(props) => props.pl && props.pl};
  /** Padding on left and right */
  padding-inline: ${(props) => props.px && props.px};
  /** Padding on top and bottom */
  padding-block: ${(props) => props.py && props.py};
`;

export let fontSizesFn = css`
  font-size: ${(props) => props.fontSize && props.fontSize};
  font-weight: ${(props) => props.weight && props.weight};
`;

// spaceFn.propTypes = {}
