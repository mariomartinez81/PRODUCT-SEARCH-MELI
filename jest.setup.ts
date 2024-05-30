// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

jest.mock('@tanstack/react-query', () => ({
  ...jest.requireActual('@tanstack/react-query'),
  useQuery: jest.fn(),
}));

declare global {
  // eslint-disable-next-line no-unused-vars
  interface Global {
    document: Document;
    window: Window;
    navigator: Navigator;
  }
}

/**
 * fix: `matchMedia` not present, legacy browsers require a polyfill
 */
// eslint-disable-next-line vars-on-top, no-var, no-unused-vars

global.matchMedia =
  global.matchMedia ||
  function () {
    return {
      matches: false,
      // eslint-disable-next-line func-names, object-shorthand
      addListener: function () {},
      // eslint-disable-next-line func-names, object-shorthand
      removeListener: function () {},
    };
  };

(global as any).primary = 'primary';
