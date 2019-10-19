module.exports = {
  moduleFileExtensions: ["ts", "tsx", "js"],
  moduleNameMapper: {
    "^@/(.+)": "<rootDir>/src/$1"
  },
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest"
  },
  globals: {
    "ts-jest": {
      tsConfigFile: "tsconfig.jest.json"
    }
  },
  testMatch: ["**/*.test.+(ts|tsx|js)"],
  verbose: true,
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts']
};
