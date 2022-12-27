import React from "react";
import { theme } from "../../utils/theme";
import Button from "./index";

export default {
  title: "Components/Button",
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  label: "Button",
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Button",
  variant: "secondary",
};

export const Error = Template.bind({});

Error.args = {
  label: "Button",
  variant: "error",
};

export const Success = Template.bind({});

Success.args = {
  size: "small",
  label: "Success",
  variant: "success",
};

export const Text = Template.bind({});

Text.args = {
  size: "small",
  label: "Button",
  variant: "text",
};

export const Disabled = Template.bind({});

Disabled.args = {
  size: "small",
  label: "Disabled",
  disabled: true,
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  label: "Button",
  variant: "error",
};
