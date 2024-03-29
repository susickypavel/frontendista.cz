// TODO: add chalk for colors!
// import chalk from "chalk";

export function validateEnvVars(vars) {
  const requiredVars = [
    "SANITY_GRAPHQL_ENDPOINT",
    "SANITY_CLIENT_TOKEN",
    "SANITY_PROJECT_ID",
    "SANITY_DATASET_ID",
  ];

  requiredVars.reduce((hasFailed, variable) => {
    const isMissing = !vars[variable];

    if (isMissing) {
      console.error(`${`env  `} - ${`${variable}`} is required`);
    }

    return hasFailed || isMissing;
  }, false) && process.exit(1);
}
