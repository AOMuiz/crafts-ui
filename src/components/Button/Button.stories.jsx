import React from "react";
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

export const Large = Template.bind({});
Large.args = {
  size: "large",
  label: "Button",
  variant: "error",
};

export const Small = Template.bind({});

Small.args = {
  size: "small",
  label: "Button",
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
