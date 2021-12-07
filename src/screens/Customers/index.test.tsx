import { render, screen } from '@testing-library/react';
import { Customers } from '..';

test('renders component', () => {
  render(<Customers />);
  const linkElement = screen.getByText(/Customers/i);
  expect(linkElement).toBeInTheDocument();
});
