module.exports = {
  verbose: true,
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga|webp)$':
    '<rootDir>/src/tests/__mocks__/FileMock.js',
    '\\.(css|scss|less)$': 'identity-obj-proxy',
  },
  setupFilesAfterEnv: ['<rootDir>/src/tests/__mocks__/SetupTests.js'],
  coverageReporters: ['json', ['lcov', { projectRoot: './' }]],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.{js,jsx}',
    '!src/tests/**/*',
    '!src/index.jsx',
    '!src/**/*.story.{js,jsx}',
  ],
  coverageThreshold: {
    global: {
      branches: 0,
      functions: 20,
      lines: 20,
      statements: 20,
    },
  },
};
