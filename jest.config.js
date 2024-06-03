export default {
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },

  moduleNameMapper: {
    '\\.(scss|less|css|sass)$': 'identity-obj-proxy',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/src/__test__/__mocks__/fileMock.js',
    '^@assets(.*)$': '<rootDir>/src/assets$1',
    '^@cache(.*)$': '<rootDir>/src/cache$1',
    '^@components(.*)$': '<rootDir>/src/components$1',
    '^@hooks(.*)$': '<rootDir>/src/hooks$1',
    '^@types(.*)$': '<rootDir>/src/types$1',
    '^@layouts(.*)$': '<rootDir>/src/layouts$1',
    '^@pages(.*)$': '<rootDir>/src/pages$1',
    '^@routes(.*)$': '<rootDir>/src/routes$1',
    '^@services(.*)$': '<rootDir>/src/services$1',
    '^@utils(.*)$': '<rootDir>/src/utils$1',
    '^@sass(.*)$': '<rootDir>/src/sass$1',
  },

  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testPathIgnorePatterns: ['/node_modules/', '<rootDir>/src/api/'],
  preset: 'ts-jest',
};
