import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
  verbose: true,
  preset: "ts-jest",
  globals: {
    "ts-jest": {
      tsconfig: "./test/tsconfig.spec.json",
    },
  },
  moduleNameMapper: {
    "src/(.*)": "<rootDir>/src/$1",
    "pages/(.*)": "<rootDir>/pages/$1",
  },
};

export default config;
