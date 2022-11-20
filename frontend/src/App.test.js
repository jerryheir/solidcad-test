import { render, screen } from '@testing-library/react';
import App from './App';

test('renders contact form text', () => {
  render(<App />);
  const linkElement = screen.getByText(/contact form/i);
  expect(linkElement).toBeInTheDocument();
});
