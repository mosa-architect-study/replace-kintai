module.exports = {
  moduleFileExtensions: ["ts", "tsx", "js"],
  moduleNameMapper: {
    "^@/(.+)": "<rootDir>/src/$1"
  },
  testMatch: ["**/*.test.+(ts|tsx|js)"],
  verbose: true,
  setupFilesAfterEnv: ['<rootDir>/.test/setup.ts']
};
