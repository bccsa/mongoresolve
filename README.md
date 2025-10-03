# mongoresolve

MongoDB Query parser and custom resolver

## Project Structure

This is a monorepo containing:

- **packages/mongoresolve** - The main library package that exports the `MongoResolve` class
- **packages/test-project** - Integration tests and examples of using the library

## Getting Started

### Installation

```bash
npm install
```

### Building

Build all packages:

```bash
npm run build
```

### Testing

Run all tests:

```bash
npm test
```

### Code Formatting

This project uses Prettier with a tab width of 4 spaces.

Check formatting:

```bash
npm run format:check
```

Format code:

```bash
npm run format
```

## Library Usage

The `mongoresolve` library works in both Node.js and browser environments.

### Node.js (CommonJS)

```javascript
const { MongoResolve } = require('mongoresolve');

const resolver = new MongoResolve({ name: 'John' });
console.log(resolver.getQuery());
```

### Node.js (ESM) / Browser

```javascript
import { MongoResolve } from 'mongoresolve';

const resolver = new MongoResolve({ name: 'John' });
console.log(resolver.getQuery());
```

For more details, see the [library README](packages/mongoresolve/README.md).

## Development

The library is built with TypeScript and generates both CommonJS and ESM outputs to support various environments:

- **CommonJS** (`dist/cjs`) - For Node.js require()
- **ESM** (`dist/esm`) - For modern import statements
- **Type definitions** (`dist/types`) - TypeScript declarations

## License

MIT
