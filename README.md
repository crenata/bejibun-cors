<div align="center">

<img src="https://github.com/crenata/bejibun/blob/master/public/images/bejibun.png?raw=true" width="150" alt="Bejibun" />

![GitHub top language](https://img.shields.io/github/languages/top/crenata/bejibun-cors)
![GitHub all releases](https://img.shields.io/github/downloads/crenata/bejibun-cors/total)
![GitHub issues](https://img.shields.io/github/issues/crenata/bejibun-cors)
![GitHub](https://img.shields.io/github/license/crenata/bejibun-cors)
![GitHub release (latest by date including pre-releases)](https://img.shields.io/github/v/release/crenata/bejibun-cors?display_name=tag&include_prereleases)

</div>

# Cors for Bejibun
Cors for Bejibun Framework.

## Usage

### Installation
Install the package.

```bash
# Using Bun
bun add @bejibun/cors

# Using Bejibun
bun ace install @bejibun/cors
```

### Configuration
The configuration file automatically executed if you are using `ace`.

Or

Add `cors.ts` inside config directory on your project if doesn't exist.

```bash
config/cors.ts
```

```ts
const config: Record<string, any> = {
    allowedHeaders: "*",
    credentials: false,
    exposedHeaders: [],
    maxAge: 86400,
    methods: "*",
    origin: "*"
};

export default config;
```

### How to Use
How to use the package.

```ts
import Cors from "@bejibun/cors";

return Response.json({...}, {
    headers: {
        ...Cors.init
    }
});

// OR

return Response.json({...}, {
    headers: Cors.init
});
```

## Contributors
- [Havea Crenata](mailto:havea.crenata@gmail.com)

## ☕ Support / Donate

If you find this project helpful and want to support it, you can donate via PayPal :

[![Donate with PayPal](https://img.shields.io/badge/Donate-PayPal-blue.svg?logo=paypal)](https://paypal.me/hafiizhghulam)

Or if you are prefer using crypto :

| EVM                                                                                                     | Solana                                                                                                  |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| <img src="https://github.com/crenata/bejibun/blob/master/public/images/EVM.png?raw=true" width="150" /> | <img src="https://github.com/crenata/bejibun/blob/master/public/images/SOL.png?raw=true" width="150" /> |
| 0xdABe8750061410D35cE52EB2a418c8cB004788B3                                                              | GAnoyvy9p3QFyxikWDh9hA3fmSk2uiPLNWyQ579cckMn                                                            |