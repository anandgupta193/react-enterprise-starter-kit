import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('[App Component Test Suite]', () => {
  test('should pass if app component is able to render successfully', () => {
    render(<App />);
  });
});
