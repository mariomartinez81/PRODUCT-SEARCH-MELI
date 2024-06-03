import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

import Home from '@pages/Home';

describe('test for home page', () => {
  beforeEach(() => {
    (useQuery as jest.Mock).mockImplementation(() => ({
      isLoading: false,
      error: null,
      data: null,
    }));
  });

  test('should render home page in the dom', () => {
    const { container } = render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>,
    );
    expect(container).toBeInTheDocument();
  });

  test('should render home page in responsive window', () => {
    Object.defineProperty(window, 'innerWidth', {
      value: 320,
    });
    const { container } = render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>,
    );
    expect(container).toBeInTheDocument();
  });

  test('should validate render logoElement in home page', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>,
    );
    const logo = screen.getAllByAltText('test-file-stub')[0];
    expect(logo).toBeInTheDocument();
  });

  test('should validate render search bar icon element', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>,
    );
    const searchBar = screen.getAllByAltText('test-file-stub')[1];
    expect(searchBar).toBeInTheDocument();
  });

  test('should validate functionality of input search', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>,
    );
    const searchBarInput = screen.getByRole('textbox') as HTMLInputElement;
    expect(searchBarInput).toBeInTheDocument();
    fireEvent.change(searchBarInput, { target: { value: 'test' } });
    expect(searchBarInput.value).toBe('test');
  });

  test('should validate functionality of button search', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>,
    );
    const searchBarInput = screen.getByRole('textbox') as HTMLInputElement;
    expect(searchBarInput).toBeInTheDocument();
    fireEvent.change(searchBarInput, { target: { value: 'test' } });
    expect(searchBarInput.value).toBe('test');
    const searchButton = screen.getAllByAltText('test-file-stub')[1];
    expect(searchButton).toBeInTheDocument();
    fireEvent.click(searchButton);
  });

  test('should validate functionality click to home (click icon meli)', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>,
    );
    const searchBarInput = screen.getByRole('textbox') as HTMLInputElement;
    expect(searchBarInput).toBeInTheDocument();
    fireEvent.change(searchBarInput, { target: { value: 'test' } });
    expect(searchBarInput.value).toBe('test');
    const searchButton = screen.getAllByAltText('test-file-stub')[0];
    expect(searchButton).toBeInTheDocument();
    fireEvent.click(searchButton);
  });

  test('should validate search functionality by enter press key button', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>,
    );
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
