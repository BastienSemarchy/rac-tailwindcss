import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';
import { Button } from 'ui';

import './globals.css';

const meta: Meta<typeof Button> = {
  component: Button,
  argTypes: {
    type: {
      control: { type: 'radio' },
      options: ['button', 'submit', 'reset'],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Raw: Story = {
  render: (props) => (
    <Button
      {...props}
      onClick={(): void => {
        // eslint-disable-next-line no-alert -- alert for demo
        alert('Hello from Turborepo!');
      }}
    />
  ),
  name: 'Button',
  args: {
    children: 'Hello',
    type: 'button',
  },
};

export const Override: Story = {
  render: (props) => (
    <Button
      {...props}
      onClick={(): void => {
        // eslint-disable-next-line no-alert -- alert for demo
        alert('Hello from Turborepo!');
      }}
      className='bg-red-500 bg-red-700'
    />
  ),
  name: 'Button',
  args: {
    children: 'Hello',
    type: 'button',
  },
};
