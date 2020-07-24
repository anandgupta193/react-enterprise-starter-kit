import React from 'react';
import { render, screen } from '@testing-library/react';
import { WELCOME_HEADING } from '../../constants/HomeConstants';
import Home from './Home';

describe('[Home Component Test Suite]', () => {
  test('should pass if "React Enterprise Starter Kit" is found in the document', () => {
    render(<Home />);
    expect(screen.getByText(WELCOME_HEADING)).toBeInTheDocument();
  });
});
