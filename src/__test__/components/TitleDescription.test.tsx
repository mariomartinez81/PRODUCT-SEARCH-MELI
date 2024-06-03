import { render, screen } from '@testing-library/react';
import TitleDescription from '@components/common/TitleDescription';

describe('EmptyState tests', () => {
  test('should render component', () => {
    const { container } = render(
      <TitleDescription title="title" description="description" />,
    );
    expect(container).toBeDefined();
  });
  test('should render with all props', () => {
    render(
      <TitleDescription
        title="test title"
        description="description"
        className="text"
        classNameTitle="text"
        classNameDescription="text"
      />,
    );
    expect(screen.getByText('test title')).toBeDefined();
  });
});
