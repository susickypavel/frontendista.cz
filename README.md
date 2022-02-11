# frontendista.cz

## Installation

### Prerequisites

- Node runtime
- Yarn package manager (not exclusive, but preferred)

#### Hosts file configuration

By default app tries to run via host `local.frontendista.cz` on port 80.
To make this work you need to modify `hosts` file on your system.
Add line below to your config to `/etc/hosts`. You can find location of your hosts file [here](<https://en.wikipedia.org/wiki/Hosts_(file)>).

Common locations:

`Unix` - `/etc/hosts`

`Windows (cmd)` - `%SystemRoot%\System32\drivers\etc\hosts`

`Windows (powershell)` - `$Env:SystemRoot\System32\drivers\etc\hosts`

```
127.0.0.1       local.frontendista.cz
```

### Environment variables

TBD

### Development

```sh
# Clone and change directory
git clone git@github.com:Thesoreon/frontendista.cz.git
cd frontendista.cz

# Install dependencies
yarn install

# Run development server with HMR
yarn dev
```

### Bonus

1. Install recommended extensions for VSCode (listed in `.vscode/extensions.json`)
