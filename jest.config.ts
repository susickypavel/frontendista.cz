import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
  verbose: true,
  preset: "ts-jest",
  globals: {
    "ts-jest": {
      tsconfig: "./test/tsconfig.spec.json",
    },
  },
};

export default config;
