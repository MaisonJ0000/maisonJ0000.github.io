import React, { HTMLAttributes } from 'react';
import NavLink from './NavLink';

export default {
  component: NavLink,
  title: 'Task',
};

interface IProps extends HTMLAttributes<HTMLElement> {
  href: string;
  children?: React.ReactNode;
}

const Template = (args: IProps) => <NavLink {...args} />;

export const Default: any = Template.bind({});
Default.args = {
  href: '/',
  children: 'Posts',
};

Default.parameters = {
  nextRouter: {
    asPath: '/posts',
  },
};
