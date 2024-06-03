import { render, screen } from '@testing-library/react';
import Amount from '@components/common/Amount';

describe('AssistanceError layout test', () => {
  test('should render to component', () => {
    const { container } = render(<Amount amount={1000} decimals={2} />);
    expect(screen.getByText('1.000')).toBeInTheDocument();
    expect(container).toBeInTheDocument();
  });

  test('should render to component with new classNameProps', () => {
    const { container } = render(
      <Amount
        amount={1000}
        decimals={2}
        classNameContainer="flex align-baseline"
        classNameIntegerPart="flex text-lg gap-1.5"
        classNameDecimalPart="text-sm self-start"
      />,
    );
    expect(container).toBeInTheDocument();
  });
});
