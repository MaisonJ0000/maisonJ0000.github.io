import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import MainLayout from "./mainLayout";

export default {
  title: "Template/MainLayout",
  component: MainLayout,
} as ComponentMeta<typeof MainLayout>;

const Template: ComponentStory<typeof MainLayout> = (args) => (
  <MainLayout {...args} />
);

export const Layout = Template.bind({});
Layout.args = {};
