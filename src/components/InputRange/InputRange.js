import { useState } from "react";
import styled from "styled-components";
import { theme } from "../../utils/theme";

const InputRange = ({ min = "0", max, className }) => {
  const [value, setValue] = useState(0);

  const getBackgroundSize = () => {
    return { backgroundSize: `${(value * 100) / max}% 100%` };
  };

  return (
    <RangeContainer className={className}>
      <Range
        type="range"
        min={min}
        max={max}
        onChange={(e) => setValue(e.target.value)}
        style={getBackgroundSize()}
        value={value}
      />
    </RangeContainer>
  );
};

export default InputRange;

const RangeContainer = styled.div`
  input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background: ${theme.colors.primary[400]};
    cursor: pointer;
    box-shadow: 0 0 2px 0 #555;
    transition: background 0.3s ease-in-out;
  }

  input[type="range"]::-webkit-slider-runnable-track {
    -webkit-appearance: none;
    box-shadow: none;
    border: none;
    background: transparent;
  }

  input[type="range"]::-moz-range-track {
    -webkit-appearance: none;
    box-shadow: none;
    border: none;
    background: transparent;
  }
  /* chrome styling for thumb */
  input[type="range"]::-webkit-slider-thumb:hover {
    box-shadow: #9bb8ff 0px 0px 0px 8px;
  }

  input[type="range"]::-webkit-slider-thumb:active {
    box-shadow: #9bb8ff 0px 0px 0px 11px;
    transition: box-shadow 350ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
      left 350ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
      bottom 350ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  }

  /* mozilla styling for thumb */
  input[type="range"]::-moz-range-thumb:active {
    box-shadow: #9bb8ff 0px 0px 0px 11px;
    transition: box-shadow 350ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
      left 350ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
      bottom 350ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  }
  input[type="range"]::-moz-range-thumb:hover {
    box-shadow: #9bb8ff 0px 0px 0px 11px;
    transition: box-shadow 350ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
      left 350ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
      bottom 350ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  }
`;

const Range = styled.input`
  -webkit-appearance: none;
  appearance: none;
  height: 7px;
  background: grey;
  border-radius: 5px;
  background-image: linear-gradient(
    ${theme.colors.primary[400]},
    ${theme.colors.primary[400]}
  );
  background-repeat: no-repeat;
`;
