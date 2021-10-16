module.exports = {
  globals: {
    CONFIG: true,
  },
  setupFilesAfterEnv: ['jest-plugin-context/setup', 'given2/setup'],
  coveragePathIgnorePatterns: [
    'src/index.tsx',
    'src/reportWebVitals.ts',
  ],
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 90,
      lines: 90,
      statements: 90,
    },
  },
  roots: [
    '<rootDir>/src',
  ],
}