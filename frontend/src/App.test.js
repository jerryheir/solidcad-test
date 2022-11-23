import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('renders contact form text', () => {
  render(<App />);
  const linkElement = screen.getByText(/contact form/i);
  expect(linkElement).toBeInTheDocument();
});

describe('Contact form', () => {
  test('Validate Test Suite - Email', async () => {
    render(<App />);
    const inputNode = screen.getByPlaceholderText(/email/i);
    fireEvent.change(inputNode, { target: { value: 'Entered wrong email' }});
    const linkElement = await screen.findByText(/invalid email/i);
    expect(linkElement).toBeInTheDocument();
  })
})
