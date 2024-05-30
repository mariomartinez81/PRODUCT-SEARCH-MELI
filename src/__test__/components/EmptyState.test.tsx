import { render } from '@testing-library/react';

import EmptyState from '../../components/EmptyState';

const emptyStateProps = {
  title: 'test',
  primaryIcon: undefined,
  className: '',
  description: 'test',
  hasButton: true,
  textButton: 'button test',
  callback: () => {},
  style: {},
  hasActionPermission: false,
  styleButton: {},
  classNameTexts: '',
  customIconButton: undefined,
  classNameButton: '',
  descriptionCustomClass: '',
  goTo: undefined,
};

describe('EmptyState tests', () => {
  test('should match snapshots', () => {
    const { container } = render(<EmptyState {...emptyStateProps} />);
    expect(container).toBeDefined();
  });
});
