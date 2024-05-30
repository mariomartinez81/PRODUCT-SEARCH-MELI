import { fireEvent, render, screen } from '@testing-library/react';

import Button from '../../components/Button';

describe('AssistanceError layout test', () => {
  test('should render to component', () => {
    const { container } = render(<Button text="button test" />);
    expect(screen.getByText('button test')).toBeInTheDocument();
    expect(container).toBeInTheDocument();
  });

  test('should render more props', () => {
    const { container } = render(
      <Button text="button test" backgroundColor="#3f3f3h" size="xs" />,
    );
    expect(screen.getByText('button test')).toBeInTheDocument();
    expect(container).toBeInTheDocument();
  });

  test('should test click functionality', () => {
    render(<Button text="button test" backgroundColor="#3f3f3h" size="xs" />);
    const button = screen.getByText('button test');
    expect(button).toBeInTheDocument();
    fireEvent.click(button);
  });
});
