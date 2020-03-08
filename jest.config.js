module.exports = {
  verbose: true,
  moduleFileExtensions: ["ts", "tsx", "js"],
  transform: {
    "^.+\\.tsx?$": "babel-jest",
  },
  moduleNameMapper: {
    "~(.*)$": "<rootDir>/src$1",
  },
  testPathIgnorePatterns: ["./.next/", "./node_modules/"],
};
