import React, { useState } from "react";
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
    <div>
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

Accordion.propTypes = {
  allowMultipleOpen: PropTypes.bool,
  children: PropTypes.instanceOf(Object).isRequired,
};
