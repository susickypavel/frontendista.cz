const nextJest = require("next/jest");

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: "./",
});

/**
 * @type {import('@jest/types').Config.InitialOptions}
 */
const customJestConfig = {
  modulePathIgnorePatterns: ["<rootDir>/cypress"],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  // if using TypeScript with a baseUrl set to the root directory then you need the below for alias' to work
  moduleDirectories: ["node_modules", "<rootDir>/"],
  testEnvironment: "jest-environment-jsdom",
  moduleNameMapper: {
    "^@components/(.*)$": ["<rootDir>/src/components/$1"],
    "^@utils/(.*)$": ["<rootDir>/src/utils/$1"],
    "^@stylesheets/(.*)$": ["<rootDir>/src/stylesheets/$1"],
    "^@queries/(.*)$": ["<rootDir>/src/queries/$1"],
    "^@assets/(.*)$": ["<rootDir>/src/assets/$1"],
    "^@modules/(.*)$": ["<rootDir>/src/modules/$1"],
  },
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig);
