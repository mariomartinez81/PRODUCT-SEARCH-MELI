import { useQuery } from '@tanstack/react-query';
import { MemoryRouter, Route } from 'react-router-dom';
import { render, screen, waitFor, cleanup } from '@testing-library/react';

import { productMockData } from '__test__/__mocks__/mockDataProducts';
import DetailsProduct from '../../pages/DetailsProduct';

describe('Test for Details product page', () => {
  beforeAll(() => {
    (useQuery as jest.Mock).mockImplementation(() => ({
      data: productMockData,
      isLoading: false,
    }));
  });
  afterEach(() => cleanup());

  test('Should renders product details when API call is successful', async () => {
    render(
      <MemoryRouter initialEntries={['/product/1']}>
        <Route path="/product/:id">
          <DetailsProduct />
        </Route>
      </MemoryRouter>,
    );

    // Wait for API call to complete
    await waitFor(() => screen.getByText('Product 1 description'));

    // Assert that product details are rendered
    expect(screen.getByText('Product 1 description')).toBeInTheDocument();
    expect(
      screen.getByAltText('https://example.com/product1.jpg'),
    ).toBeInTheDocument();
    expect(screen.getByText('Category 1')).toBeInTheDocument();
    expect(screen.getByText('Category 2')).toBeInTheDocument();
  });

  test('Should renders error message when API call fails', async () => {
    render(
      <MemoryRouter initialEntries={['/product/2']}>
        <Route path="/product/:id">
          <DetailsProduct />
        </Route>
      </MemoryRouter>,
    );

    // Wait for API call to complete
    await waitFor(() => screen.getByText('Error: Product not found'));

    // Assert that error message is rendered
    expect(screen.getByText('Error: Product not found')).toBeInTheDocument();
  });
});
