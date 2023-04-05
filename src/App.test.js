import { render, screen } from '@testing-library/react';
import BookingForm from './BookingForm';

test('booking form test', () => {
  render(<BookingForm />);
  const date = screen.getByLabelText(/Choose date/);
  expect(date).toBe("");
});
