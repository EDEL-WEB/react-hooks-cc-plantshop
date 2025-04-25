import React from 'react';
import { render } from '@testing-library/react';
import App from '../components/App';  // Correct path
 // Correct path from test file to App.js

describe('App', () => {
  it('renders without crashing', () => {
    render(<App />);
  });
});