import SearchBar from '@components/products/SearchBar';
import { fireEvent, render, screen } from '@testing-library/react';

describe('EmptyState tests', () => {
  test('should render component', () => {
    const { container } = render(<SearchBar className="test" icon="icon" />);
    expect(container).toBeDefined();
  });

  test('should validate functionality of input search', () => {
    render(<SearchBar className="test" icon="icon" />);
    const searchBarInput = screen.getByRole('textbox') as HTMLInputElement;
    expect(searchBarInput).toBeInTheDocument();
    fireEvent.change(searchBarInput, { target: { value: 'test' } });
    expect(searchBarInput.value).toBe('test');
  });

  test('should validate functionality of button search', () => {
    render(<SearchBar className="test" icon="icon" />);
    const searchBarInput = screen.getByRole('textbox') as HTMLInputElement;
    expect(searchBarInput).toBeInTheDocument();
    fireEvent.change(searchBarInput, { target: { value: 'test' } });
    expect(searchBarInput.value).toBe('test');
    const searchButton = screen.getByAltText('icon');
    expect(searchButton).toBeInTheDocument();
    fireEvent.click(searchButton);
  });

  test('should validate functionality click to home (click icon meli)', () => {
    render(<SearchBar className="test" icon="icon" />);
    const searchBarInput = screen.getByRole('textbox') as HTMLInputElement;
    expect(searchBarInput).toBeInTheDocument();
    fireEvent.change(searchBarInput, { target: { value: 'test' } });
    expect(searchBarInput.value).toBe('test');
    const searchButton = screen.getByAltText('icon');
    expect(searchButton).toBeInTheDocument();
    fireEvent.click(searchButton);
  });

  test('should validate search functionality by enter press key button', () => {
    render(<SearchBar className="test" icon="icon" />);
    const searchBarInput = screen.getByRole('textbox') as HTMLInputElement;
    expect(searchBarInput).toBeInTheDocument();
    fireEvent.change(searchBarInput, { target: { value: 'test' } });
    expect(searchBarInput.value).toBe('test');
    fireEvent.keyPress(searchBarInput, {
      key: 'Enter',
      code: 'Enter',
      charCode: 13,
    });
  });
});
