<p align="center">
  <a href="https://frontendista.cz">
    <h1 align="center">frontendista.cz</h1>
  </a>
</p>

<p align="center">
  <a aria-label="Vercel logo" href="https://vercel.com">
    <img src="https://img.shields.io/badge/MADE%20BY%20Vercel-000000.svg?style=for-the-badge&logo=Vercel&labelColor=000">
  </a>
</p>
<p align="center">
  <a href="https://github.com/Thesoreon/frontendista.cz/actions/workflows/build_lint_test_staging.yml">
    <img src="https://github.com/thesoreon/frontendista.cz/actions/workflows/build_lint_test_staging.yml/badge.svg" />
  </a>
  <a href="https://github.com/Thesoreon/frontendista.cz/actions/workflows/build_lint_test_production.yml">
    <img src="https://github.com/Thesoreon/frontendista.cz/actions/workflows/build_lint_test_production.yml/badge.svg" />
  </a>
</p>

## 1. Installation

### 1.1 Prerequisites

- node.js (lts) runtime
- pnpm package manager (not exclusive, but preferred)

#### 1.1.1 Hosts file configuration

By default app tries to run via host `local.frontendista.cz` on port 80.

To make this work you need to modify `hosts` file on your system.
Add line below to your `hosts` file.

```
127.0.0.1       local.frontendista.cz
```

> You can find location of your hosts file [here](<https://en.wikipedia.org/wiki/Hosts_(file)>).

### 1.2 Environment variables

#### 1.2.1 Functionality variables

| Name                            | Value                                                              | Required |
| ------------------------------- | ------------------------------------------------------------------ | -------- |
| SANITY_GRAPHQL_ENDPOINT         | https://<PROJECT_ID>.api.sanity.io/v1/graphql/<DATASET_ID>/default | ✅       |
| SANITY_CLIENT_TOKEN             | _hidden_                                                           | ✅       |
| SANITY_PROJECT_ID               | _hidden_                                                           | ✅       |
| SANITY_DATASET_ID               | development or production                                          | ✅       |
| DISCORD_CONTACT_MESSAGE_WEBHOOK | _hidden_                                                           |          |

#### 1.2.2 Debugging variables

| Name                   | Value | Description                          |
| ---------------------- | ----- | ------------------------------------ |
| ANALYZE                | true  | Run webpack bundle analyzer on build |
| PRODUCTION_SOURCE_MAPS | true  | Emit source maps on production build |

### 1.3 Development

```sh
# Clone and change directory
git clone git@github.com:Thesoreon/frontendista.cz.git
cd frontendista.cz

# Install dependencies
pnpm install

# Run development server with HMR
pnpm dev
```

### 1.4 Bonus

- Install recommended extensions for VSCode (listed in `.vscode/extensions.json`)

## 2. Environments

| Name       |            Description            |                            URL                             |
| :--------- | :-------------------------------: | :--------------------------------------------------------: |
| local      |         rapid development         |   [local.frontendista.cz](http://local.frontendista.cz)    |
| staging    | production-like, testing purposes | [staging.frontendista.cz](https://staging.frontendista.cz) |
| production |            production             |         [frontendista.cz](https://frontendista.cz)         |
