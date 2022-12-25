import Spinner from ".";
import styled from "styled-components";

export default {
  title: "Components/Spinner",
  component: Spinner,
};

const Template = (args) => <Spinner {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 50,
};

const DarkBackground = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background-color: #2c2c59;
`;

export const Light = () => (
  <DarkBackground>
    <Spinner size={50} light />
  </DarkBackground>
);
