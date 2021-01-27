import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
  verbose: true,
  preset: "ts-jest",
  globals: {
    "ts-jest": {
      tsconfig: "./test/tsconfig.spec.json",
    },
  },
  setupFilesAfterEnv: ["./test/setup.ts"],
  moduleNameMapper: {
    "src/(.*)": "<rootDir>/src/$1",
    "pages/(.*)": "<rootDir>/pages/$1",
    "\\.(css|sass|scss)$": "identity-obj-proxy",
  },
};

export default config;
