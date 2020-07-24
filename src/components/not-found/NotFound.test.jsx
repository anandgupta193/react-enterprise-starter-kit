import React from 'react';
import { render, screen } from '@testing-library/react';
import { ERROR_CODE, ERROR_TEXT } from '../../constants/404Constants';
import NotFound from './NotFound';

describe('[NotFound Component Test Suite]', () => {
  test('should pass if "404" is found in the document', () => {
    render(<NotFound />);
    expect(screen.getByText(ERROR_CODE)).toBeInTheDocument();
  });

  test('should pass if "PAGE NOT FOUND" is found in the document', () => {
    render(<NotFound />);
    expect(screen.getByText(ERROR_TEXT)).toBeInTheDocument();
  });
});
