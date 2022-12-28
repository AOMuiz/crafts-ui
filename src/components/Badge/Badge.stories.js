import { Badge } from "./Badge";

export default {
  title: "Components/Badge",
  component: Badge,
  args: {
    text: "Badge",
  },
  parameters: {
    design: {
      type: "figspec",
      url: "https://www.figma.com/file/3Q1HTCalD0lJnNvcMoEw1x/Mealdrop?node-id=1906%3A3469",
    },
  },
};

const Template = (args) => <Badge {...args} />;

export const Default = Template.bind({});

export const Warning = Template.bind({});
Warning.args = {
  text: "warning",
  status: "warning",
};

export const Success = Template.bind({});
Success.args = {
  text: "success",
  status: "success",
};

export const Size = Template.bind({});
Size.args = {
  text: "error",
  status: "error",
  size: "large",
};

export const Action = Template.bind({});
Action.args = {
  text: "error",
  size: "large",
  action: true,
};
