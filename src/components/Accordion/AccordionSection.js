import PropTypes from "prop-types";
import styled from "styled-components";
import { theme } from "../../utils/theme";

export const AccordionSection = (props) => {
  const onClick = () => {
    props.onClick(props.label);
  };

  return (
    <AccordionItem isOpen={props.isOpen}>
      <AccordionHeader onClick={onClick} style={{ cursor: "pointer" }}>
        <AccordionTitle>{props.label}</AccordionTitle>
        <AccordionIcon>
          {!props.isOpen && <span>&#9650;</span>}
          {props.isOpen && <span>&#9660;</span>}
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
  margin: 10px;
  padding: 5px 15px;
`;

const AccordionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${theme.colors.neutral[100]};
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
`;
