import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import SignUpComponent, { SignupFormProps } from '../components/Auth/SignUpComponent';

const metaSignup: Meta = {
  title: 'Components/Signup',
  component: SignUpComponent,
};

export default metaSignup;

type SignupStory = StoryObj<typeof metaSignup> & {
  component: React.FC<SignupFormProps>;
};

const signupStory: SignupStory = {
  ...metaSignup,
  component: SignUpComponent,
  args: {
    onSignup: (email, password) => {
      console.log('Signup:', email, password);
    },
  },
};

export const UserSignup = signupStory;
