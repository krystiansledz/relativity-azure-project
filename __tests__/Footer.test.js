import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';
import Footer from '@/components/footer/Footer';

describe('Footer', () => {
  it('renders the footer', () => {
    render(<Footer />);

    const text = screen.getByText("krystiansledz")

    expect(text).toBeInTheDocument();

  });
});