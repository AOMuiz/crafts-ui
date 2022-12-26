import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { AccordionSection } from "./AccordionSection";

const Accordion = (props) => {
  const [openSections, setopenSections] = useState({});

  const onClick = (label) => {
    const isOpen = !!openSections[label];
    if (props.allowMultipleOpen) {
      setopenSections({
        ...openSections,
        [label]: !isOpen,
      });
    } else {
      setopenSections({
        [label]: !isOpen,
      });
    }
  };

  return (
    <div style={{ border: "2px solid #008f68" }}>
      {props.children.map((child) => (
        <AccordionSection
          isOpen={!!openSections[child.props.label]}
          label={child.props.label}
          onClick={onClick}
        >
          {child.props.children}
        </AccordionSection>
      ))}
    </div>
  );
};

export default Accordion;

const AccordionItem = styled.div``;
const AccordionTitle = styled.div``;
const AccordionContent = styled.div``;

Accordion.propTypes = {
  allowMultipleOpen: PropTypes.bool,
  children: PropTypes.instanceOf(Object).isRequired,
};

// Accordion.propTypes = {
//   children: PropTypes.instanceOf(Object).isRequired,
//   isOpen: PropTypes.bool.isRequired,
//   label: PropTypes.string.isRequired,
//   onClick: PropTypes.func.isRequired,
// };

// Accordion.defaultProps = {
//   width: 100,
//   height: 100,
//   borderRadius: "none",
// };
