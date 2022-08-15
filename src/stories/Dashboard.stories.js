/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Meta } from '@storybook/addon-docs';
import Dashboard from '../src/Dashboard';
import DashboardDoc from './Dashboard.mdx';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';

export default {
  title: 'QdotO/Dashboard',
  component: Dashboard,
  parameters: {
    docs: {
      page: DashboardDoc
    }
  }
};

<Meta title="QdotO/Dashboard" component={Dashboard} />;
const Template = args => <Dashboard {...args} />;

export const WithItems = Template.bind({});
WithItems.args = {
  username: 'Quincy Obeng'
};

export const NoItems = Template.bind({});
NoItems.args = {
  username: 'Quincy Obeng',
  gridItems: []
};
