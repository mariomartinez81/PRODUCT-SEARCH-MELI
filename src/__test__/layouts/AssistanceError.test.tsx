import { render, screen } from '@testing-library/react';

import AssistanceError from '@layouts/AssistanceError';

describe('AssistanceError layout test', () => {
  test('should render to component', () => {
    const { container } = render(<AssistanceError />);
    expect(container).toBeInTheDocument();
  });
  test('should render to component with props', () => {
    render(<AssistanceError phoneNumber="0800-345-654" />);
    expect(screen.getByText('0800-345-654')).toBeInTheDocument();
  });
});
