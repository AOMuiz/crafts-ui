import React from "react";
import Skeleton from ".";

export default {
  title: "Components/Feedback/Skeleton",
  component: Skeleton,
};

const Template = (args) => <Skeleton {...args} />;

export const Default = Template.bind({});
Default.args = {
  width: 150,
  height: 150,
};

export const BorderRadius = Template.bind({});
BorderRadius.args = {
  width: 150,
  height: 150,
  borderRadius: "50%",
};
