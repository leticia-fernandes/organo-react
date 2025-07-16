import { render, screen } from '@testing-library/react';
import TextInput from '../../../components/TextInput';

describe('TextInput component', () => {
  test('renders the label', () => {
    const customLabel = "Input Label";
    render(<TextInput label={customLabel}/>)
    const label = screen.getByText(customLabel);
    expect(label).toBeInTheDocument();
  });

  test('renders the placeholder', () => {
    const customPlaceholder = "Type here the text";
    const sufix = "...";
    render(<TextInput placeholder={customPlaceholder}/>)
    const placeholder = screen.getByPlaceholderText(customPlaceholder+sufix);
    expect(placeholder).toBeInTheDocument();
  });
});
