import { fireEvent, render, screen } from '@testing-library/react';

import ProductSummary from '@components/products/ProductSummary';
import stg from '@utils/strings';
import { productMockData } from '../__mocks__/mockDataProducts';

describe('EmptyState tests', () => {
  test('should render component', () => {
    const { container } = render(
      <ProductSummary {...productMockData.item} isMobile={false} />,
    );
    expect(container).toBeDefined();
  });
  test('should click to row', () => {
    render(<ProductSummary {...productMockData.item} isMobile />);
    const buttonBuy = screen.getByText(stg('buy'));
    expect(buttonBuy).toBeInTheDocument();
    fireEvent.click(buttonBuy);
  });
});
