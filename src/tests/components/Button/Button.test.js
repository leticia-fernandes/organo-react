import { render, screen } from '@testing-library/react';
import Button from '../../../components/Button';

describe('Button component', () => {
  test('renders the button', () => {
    const buttonText = "Submit";
    render(<Button>{buttonText}</Button>);
    const customChildren = screen.getByText(buttonText);
    expect(customChildren).toBeInTheDocument();
  });
});
