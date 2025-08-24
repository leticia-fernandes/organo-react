import { render, screen } from '@testing-library/react';
import List from '../../../components/List';

describe('List component', () => {
  const customLabel = "List Label";
  const customOptions = ["Option1", "Option2"];

  beforeEach(() => {
    render(<List label={customLabel} items={customOptions}/>);
  });

  test('renders the label', () => {
    const label = screen.getByText(customLabel);
    expect(label).toBeInTheDocument();
  });

  test('renders the options', () => {
    const option1 = screen.getByText(customOptions[0]);
    const option2 = screen.getByText(customOptions[1]);
    expect(option1).toBeInTheDocument();
    expect(option2).toBeInTheDocument();
  });
});
