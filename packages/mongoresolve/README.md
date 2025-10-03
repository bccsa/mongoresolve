# mongoresolve

MongoDB Query parser and custom resolver

## Installation

```bash
npm install mongoresolve
```

## Usage

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

## API

### `MongoResolve`

#### Constructor

```typescript
new MongoResolve(query?: any)
```

Creates a new MongoResolve instance with an optional query object.

#### Methods

- **`getQuery(): any`** - Returns the current query object
- **`setQuery(query: any): void`** - Sets a new query object
- **`resolve(): any`** - Resolves the query (placeholder for future implementation)

## Development

### Building

```bash
npm run build
```

### Testing

```bash
npm test
```

### Code Formatting

```bash
npm run format
```

## License

MIT
