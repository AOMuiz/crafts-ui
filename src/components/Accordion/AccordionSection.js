import PropTypes from "prop-types";
import styled from "styled-components";
import { theme } from "../../utils/theme";
import Icon from "../Icon";

export const AccordionSection = (props) => {
  const onClick = () => {
    props.onClick(props.label);
  };

  return (
    <AccordionItem isOpen={props.isOpen}>
      <AccordionHeader onClick={onClick} isOpen={props.isOpen}>
        <AccordionTitle>{props.label}</AccordionTitle>
        <AccordionIcon>
          {!props.isOpen && <Icon id={"chevron-up"} strokeWidth={1.3} />}
          {props.isOpen && <Icon id={"chevron-down"} strokeWidth={1.3} />}
        </AccordionIcon>
      </AccordionHeader>
      {props.isOpen && <AccordionContent>{props.children}</AccordionContent>}
    </AccordionItem>
  );
};

AccordionSection.propTypes = {
  children: PropTypes.instanceOf(Object).isRequired,
  isOpen: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

const AccordionItem = styled.div`
  background: white;
  border: 1px solid ${theme.colors.neutral[400]};
  border-radius: 8px;
  margin: 5px;
`;

const AccordionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${theme.colors.neutral[100]};
  padding: 5px 15px;
  cursor: pointer;
  background-color: ${(props) => props.isOpen && theme.colors.neutral[200]};

  :hover {
    background-color: ${theme.colors.neutral[200]};
  }
`;

const AccordionTitle = styled.p`
  font-weight: 600;
  font-size: 16px;
  color: black;
`;

const AccordionIcon = styled.div`
  color: #64748b;
`;

const AccordionContent = styled.div`
  margin-top: 10px;
  color: #0f172a;
  padding: 5px 15px;
`;
