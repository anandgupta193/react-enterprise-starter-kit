import React from 'react';
import { Button } from '@storybook/react/demo';

export default { title: 'Button' };

// eslint-disable-next-line react/jsx-filename-extension
export const withText = () => <Button>Hello Button</Button>;

export const withEmoji = () => (
  <Button>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);
