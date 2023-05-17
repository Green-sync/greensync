import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import LoginComponent, { LoginFormProps } from '../components/Auth/LoginComponent';

const metaLogin: Meta = {
  title: 'Components/Login',
  component: LoginComponent,
};

export default metaLogin;

type LoginStory = StoryObj<typeof metaLogin> & {
  component: React.FC<LoginFormProps>;
};

const loginStory: LoginStory = {
  ...metaLogin,
  component: LoginComponent,
  args: {
    onLogin: (username, password) => {
      console.log('Login:', username, password);
    },
  },
};

export const UserLogin = loginStory;
