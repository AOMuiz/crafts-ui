import styled from "styled-components";
import { space, color, layout, flexbox } from "styled-system";

const Box = () => {
  return <OBox>Box</OBox>;
};

export default Box;

const OBox = styled.div(
  {
    boxSizing: "border-box",
    minWidth: 0,
  },
  space,
  color,
  layout,
  flexbox
);
