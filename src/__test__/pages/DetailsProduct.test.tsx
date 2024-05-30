import { useQuery } from '@tanstack/react-query';
import { MemoryRouter } from 'react-router-dom';
import { render, screen, cleanup, fireEvent } from '@testing-library/react';

import { productMockData } from '../__mocks__/mockDataProducts';
import DetailsProduct from '../../pages/DetailsProduct';

describe('Test for Details product page', () => {
  beforeAll(() => {
    (useQuery as jest.Mock).mockImplementation(() => ({
      data: productMockData,
      isLoading: false,
    }));
  });
  afterEach(() => cleanup());

  test('Should renders product details when API call is successful', () => {
    render(
      <MemoryRouter>
        <DetailsProduct />
      </MemoryRouter>,
    );

    expect(screen.getByText('Item 1')).toBeInTheDocument();
    expect(screen.getByAltText('thumbnail1.jpg')).toBeInTheDocument();
    expect(screen.getByText('Category 1')).toBeInTheDocument();
  });

  test('Should renders Breadcrumb component', () => {
    render(
      <MemoryRouter>
        <DetailsProduct />
      </MemoryRouter>,
    );

    screen.findByText('Category 1');
    expect(screen.getByText('Category 1')).toBeInTheDocument();
  });

  test('Should click to buy button', () => {
    render(
      <MemoryRouter>
        <DetailsProduct />
      </MemoryRouter>,
    );

    const buyButton = screen.getByText('Comprar');
    expect(buyButton).toBeInTheDocument();
    fireEvent.click(buyButton);
  });
});
