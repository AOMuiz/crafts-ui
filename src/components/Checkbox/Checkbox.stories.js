import React from "react";
import Checkbox from ".";

export default {
  title: "Components/Checkbox",
  component: Checkbox,
};

const Template = (args) => <Checkbox {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Subscribe to newsletter?",
  checked: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: "I agree to terms & conditions",
  checked: true,
  disabled: true,
};

export const NoLabel = Template.bind({});
NoLabel.args = {};
