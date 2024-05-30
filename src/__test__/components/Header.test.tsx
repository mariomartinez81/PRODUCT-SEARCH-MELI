import { render } from '@testing-library/react';

import Header from '../../components/Header';

describe('EmptyState tests', () => {
  test('should render component', () => {
    const { container } = render(<Header />);
    expect(container).toBeDefined();
  });
  test('should render with all props', () => {
    const { container } = render(
      <Header className="text-xl">
        <div>Children</div>
      </Header>,
    );
    expect(container).toBeDefined();
  });
});
