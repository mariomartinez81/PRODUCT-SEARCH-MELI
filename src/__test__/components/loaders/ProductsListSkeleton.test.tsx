import { render } from '@testing-library/react';

import ProductsListSkeleton from '../../../components/loaders/ProductsListSkeleton';

describe('AssistanceError layout test', () => {
  test('should render to component', () => {
    const { container } = render(<ProductsListSkeleton />);

    expect(container).toBeInTheDocument();
  });
});
