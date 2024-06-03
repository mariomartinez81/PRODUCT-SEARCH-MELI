import { render, screen } from '@testing-library/react';

import DebugDev from '@layouts/DebugDev';
import stg from '@utils/strings';

describe('AssistanceError layout test', () => {
  test('should render to component', () => {
    const { container } = render(<DebugDev />);
    expect(container).toBeInTheDocument();
  });
  test('should render to component with props', () => {
    render(<DebugDev stringError={stg('if_you_need_immediate_assistance')} />);
    expect(
      screen.getByText(stg('if_you_need_immediate_assistance')),
    ).toBeInTheDocument();
  });
});
