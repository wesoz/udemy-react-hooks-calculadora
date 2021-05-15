import { render, screen } from '@testing-library/react';
import Calculadora from './calculadora';
import ReactDOM from 'react-dom';

test('renders learn react link', () => {
  render(<Calculadora />);
  const linkElement = screen.getByText(/Calculadora/i);
  expect(linkElement).toBeInTheDocument();
});
