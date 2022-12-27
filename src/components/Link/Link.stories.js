import React from "react";
import Link from ".";

export default {
  title: "Components/Navigation/Link",
  component: Link,
};

const Template = (args) => <Link {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Link",
  href: "#",
};

export const CustomElement = Template.bind({});
CustomElement.args = {
  children: "I am span",
  href: "#",
  as: "span",
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: "Disabled link",
  href: "#",
  disabled: true,
};
