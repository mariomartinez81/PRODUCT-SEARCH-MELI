import { render, screen } from '@testing-library/react';
import BreadCrumb from '@components/common/BreadCrumb';

describe('AssistanceError layout test', () => {
  test('should render to component', () => {
    const { container } = render(
      <BreadCrumb list={['Category 1', 'Category 2']} />,
    );
    expect(screen.getByText('Category 1')).toBeInTheDocument();
    expect(screen.getByText('Category 2')).toBeInTheDocument();
    expect(container).toBeInTheDocument();
  });
});
