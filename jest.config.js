/** @typedef {import('ts-jest')} */
/** @type {import('@jest/types').Config.InitialOptions} */
module.exports = {
  preset: "ts-jest",
  setupFilesAfterEnv: ["./test/setup.ts"],
  testPathIgnorePatterns: ["/node_modules/", "/cypress/"],
  moduleDirectories: ["node_modules", "./"],
  globals: {
    "ts-jest": {
      tsConfig: "./test/tsconfig.spec.json",
    },
  },
};
