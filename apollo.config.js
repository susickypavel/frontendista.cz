/**
 * @type {import("apollo").ApolloConfig}
 */
const config = {
  client: {
    service: {
      url: "https://lnlk6q0x.api.sanity.io/v1/graphql/development/default",
    },
    tagName: "gql",
    includes: ["src/queries/**/*.ts"],
    excludes: ["**/__generated__"],
    addTypename: false,
  },
};

module.exports = config;
