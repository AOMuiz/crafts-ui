import PropTypes from "prop-types";
import styled from "styled-components";
import { theme } from "../../utils/theme";
import { Body } from "../typography";
import Icon from "../Icon";

export const Badge = ({ text, className, status, action, size }) => (
  <Container className={className} status={status} size={size}>
    <Body type="span" size="S">
      {text}
    </Body>
    {action && <Icon id={"cancel"} />}
  </Container>
);

Badge.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string,
  status: PropTypes.oneOf([
    "default",
    "warning",
    "success",
    "information",
    "error",
  ]),
  action: PropTypes.bool,
  size: PropTypes.oneOf(["default", "large"]),
};

const Container = styled.div`
  display: flex;
  width: fit-content;
  align-items: center;
  color: ${(props) =>
    props.status ? theme.colors[props.status][600] : theme.colors.neutral[700]};
  gap: 6px;
  padding: ${(props) => (props.size === "large" ? "4px 8px" : "2px 6px")};
  background: ${(props) =>
    props.status ? theme.colors[props.status][0] : theme.colors.neutral[200]};
  border-radius: 4px;
  span {
    color: ${(props) =>
      props.status
        ? theme.colors[props.status][600]
        : theme.colors.neutral[700]};
  }
  span:first-letter {
    text-transform: capitalize;
  }
`;
