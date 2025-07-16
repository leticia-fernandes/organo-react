import { render, screen } from '@testing-library/react';
import Banner from '../../../components/Banner';

describe('Banner component', () => {
  beforeEach(() => {
    render(<Banner />);
  });

  test('renders banner title', () => {
    const bannerTitle = screen.getByText(/ORGANO/i);
    expect(bannerTitle).toBeInTheDocument();
  });

  test('renders banner subtitle', () => {
    const bannerSubTitle = screen.getByText(/Pessoas e times organizados em um só lugar/i);
    expect(bannerSubTitle).toBeInTheDocument();
  });
});
