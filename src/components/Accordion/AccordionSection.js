import PropTypes from "prop-types";

export const AccordionSection = (props) => {
  const onClick = () => {
    props.onClick(props.label);
  };

  return (
    <div
      style={{
        background: props.isOpen ? "#E9F1FF" : "#0066FF",
        border: "1px solid #638EFF",
        padding: "5px 10px",
      }}
    >
      <div onClick={onClick} style={{ cursor: "pointer" }}>
        {props.label}
        <div style={{ float: "right" }}>
          {!props.isOpen && <span>&#9650;</span>}
          {props.isOpen && <span>&#9660;</span>}
        </div>
      </div>
      {props.isOpen && (
        <div
          style={{
            background: "#0154D1",
            border: "2px solid #638EFF",
            marginTop: 10,
            padding: "10px 20px",
            color: "white",
          }}
        >
          {props.children}
        </div>
      )}
    </div>
  );
};

AccordionSection.propTypes = {
  children: PropTypes.instanceOf(Object).isRequired,
  isOpen: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
