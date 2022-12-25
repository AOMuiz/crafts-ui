import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1

import Skeleton from ".";

export default {
  title: "Components/Skeleton",
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
