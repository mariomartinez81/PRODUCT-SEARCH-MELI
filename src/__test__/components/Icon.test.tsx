import { render } from '@testing-library/react';

import Icon from '@components/common/Icon';

describe('EmptyState tests', () => {
  test('should render component', () => {
    const { container } = render(<Icon icon="iconString" />);
    expect(container).toBeDefined();
  });
  test('should render with all props', () => {
    const { container } = render(<Icon className="text-xl" icon={<>Icon</>} />);
    expect(container).toBeDefined();
  });
});
