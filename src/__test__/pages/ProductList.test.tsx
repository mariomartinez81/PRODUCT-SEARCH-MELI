import { useQuery } from '@tanstack/react-query';
import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { allProductsMockData } from '../__mocks__/mockDataProducts';
import ProductList from '../../pages/ProductList';

// Mock the API response

describe('Should test Product list page', () => {
  beforeAll(() => {
    (useQuery as jest.Mock).mockImplementation(() => ({
      data: allProductsMockData,
      isLoading: false,
    }));
  });
  afterEach(() => cleanup());

  test('Should renders product list with data', () => {
    render(
      <MemoryRouter>
        <ProductList />
      </MemoryRouter>,
    );

    screen.findByText('Item 1');
    screen.findByText('Item 2');

    expect(screen.getByText('Item 1')).toBeInTheDocument();
    expect(screen.getByText('Item 2')).toBeInTheDocument();
  });

  test('Should renders product list in mobile screen', () => {
    Object.defineProperty(window, 'innerWidth', {
      value: 320,
    });
    render(
      <MemoryRouter>
        <ProductList />
      </MemoryRouter>,
    );

    screen.findByText('Item 1');
    screen.findByText('Item 2');

    expect(screen.getByText('Item 1')).toBeInTheDocument();
    expect(screen.getByText('Item 2')).toBeInTheDocument();
  });

  test('Should renders Breadcrumb component', () => {
    render(
      <MemoryRouter>
        <ProductList />
      </MemoryRouter>,
    );

    screen.findByText('Category 1');
    screen.findByText('Category 2');

    expect(screen.getByText('Category 1')).toBeInTheDocument();
    expect(screen.getByText('Category 2')).toBeInTheDocument();
  });

  test('Should navigates to product details page when a product is clicked', () => {
    render(
      <MemoryRouter>
        <ProductList />
      </MemoryRouter>,
    );

    const productRow = screen.getByText('Item 1');
    expect(productRow).toBeInTheDocument();
    fireEvent.click(productRow);
  });

  test('Should renders loading skeleton when data is Loading', () => {
    (useQuery as jest.Mock).mockImplementation(() => ({
      data: {
        author: allProductsMockData.author,
        categories: [],
        items: [],
      },
      isLoading: true,
    }));
    render(
      <MemoryRouter>
        <ProductList />
      </MemoryRouter>,
    );

    const skeleton = screen.getAllByTestId('skeleton-product-row')[0];
    expect(skeleton).toBeInTheDocument();
  });

  test('Should renders empty state when there are no products', () => {
    (useQuery as jest.Mock).mockImplementation(() => ({
      data: {
        author: allProductsMockData.author,
        categories: [],
        items: [],
      },
      isLoading: false,
    }));
    render(
      <MemoryRouter>
        <ProductList />
      </MemoryRouter>,
    );
    const title = screen.getByText('No se encontraron productos');
    const description = screen.getByText('por favor buscar otra opción');

    expect(title).toBeInTheDocument();
    expect(description).toBeInTheDocument();
  });
});
