import { render, screen } from '@testing-library/react';
import Terminal from './App';

test('renders terminal text on load', () => {
  render(<Terminal />);
  const linkElement = screen.getByText(/Welcome! to  the terminal/i);
  expect(linkElement).toBeInTheDocument();
});
