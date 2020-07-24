import React from 'react';
import { render } from '@testing-library/react';
import Button from './Button';

describe('[Button Component Test Suite]', () => {
  test('should pass if button component renders successfully', () => {
    render(<Button />);
  });
});
