import { render, screen } from '@testing-library/react';
import Terminal from './App';

test('renders learn react link', () => {
  render(<Terminal />);
  const linkElement = screen.getByText(/A terminal line/i);
  expect(linkElement).toBeInTheDocument();
});
