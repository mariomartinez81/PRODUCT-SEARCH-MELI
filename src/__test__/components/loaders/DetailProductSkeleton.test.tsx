import { render } from '@testing-library/react';
import DetailProductSkeleton from '@components/loaders/DetailProductSkeleton';

describe('AssistanceError layout test', () => {
  test('should render to component', () => {
    const { container } = render(<DetailProductSkeleton isMobile={false} />);

    expect(container).toBeInTheDocument();
  });
  test('should render to component mobile screen size test', () => {
    const { container } = render(<DetailProductSkeleton isMobile />);

    expect(container).toBeInTheDocument();
  });
});
