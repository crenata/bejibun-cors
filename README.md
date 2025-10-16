<div align="center">

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

### How to Use
How to use the package.

```ts
import Cors from "@bejibun/cors";

return Response.json({...}, {
    headers: {
        ...Cors.init
    }
});

Or

return Response.json({...}, {
    headers: Cors.init
});
```

## Contributors
- [Havea Crenata](mailto:havea.crenata@gmail.com)