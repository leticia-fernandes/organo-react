import { render, screen } from '@testing-library/react';
import Form from '../../../components/Form';

describe('Form component', () => {
  beforeEach(() => {
    render(<Form />);
  });

  test('renders the form title', () => {
    const formTitle = screen.getByRole('heading', {level: 2})
    expect(formTitle).toBeInTheDocument();
  });

  test('renders the input name', () => {
    const inputName = screen.getByText("Name");
    expect(inputName).toBeInTheDocument();
  });

  test('renders the input role', () => {
    const inputRole = screen.getByText("Role");
    expect(inputRole).toBeInTheDocument();
  });

  test('renders the input image', () => {
    const inputImage = screen.getByText("Image");
    expect(inputImage).toBeInTheDocument();
  });
});
