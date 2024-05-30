import { fireEvent, render, screen } from '@testing-library/react';

import Unavailable from '../../../layouts/unavailable/index';
import stg from '../../../utils/strings';

describe('AssistanceError layout test', () => {
  test('should render to component', () => {
    const { container } = render(<Unavailable />);
    expect(screen.getByText(stg('sorry_we_could_not_load_the_page')));
    expect(container).toBeInTheDocument();
  });

  test('should render to component with type general and logo prop', () => {
    render(<Unavailable type="general" logo="logo" />);
    expect(screen.getByAltText('logo')).toBeInTheDocument();
  });

  test('should render to component with type home', () => {
    render(<Unavailable type="home" />);
    expect(screen.getByText(stg('back_to_home'))).toBeInTheDocument();
  });

  test('should click to button back to home', () => {
    render(<Unavailable type="home" />);
    expect(screen.getByText(stg('back_to_home'))).toBeInTheDocument();
    const buttonBackHome = screen.getByText(stg('back_to_home'));
    expect(buttonBackHome).toBeInTheDocument();
    fireEvent.click(buttonBackHome);
  });
});
