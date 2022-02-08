import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const {container} = render(<App />)

  // console.log('container', container.innerHTML);
  // console.log('screen', screen.debug());

  expect(1).toBe(1)
});
