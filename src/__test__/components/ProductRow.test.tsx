import { fireEvent, render, screen } from '@testing-library/react';

import ProductRow from '../../components/ProductRow';
import { productMockData } from '../__mocks__/mockDataProducts';

describe('EmptyState tests', () => {
  test('should render component', () => {
    const { container } = render(
      <ProductRow product={productMockData.item} handleClick={() => {}} />,
    );
    expect(container).toBeDefined();
  });
  test('should click to row', () => {
    render(
      <ProductRow product={productMockData.item} handleClick={() => {}} />,
    );
    const row = screen.getByText('Item 1');
    expect(row).toBeInTheDocument();
    fireEvent.click(row);
  });
});
