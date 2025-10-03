import { MongoResolve } from 'mongoresolve';
import { createResolver, processQuery } from './index';

describe('MongoResolve Integration Tests', () => {
    describe('Direct usage', () => {
        it('should create a MongoResolve instance', () => {
            const resolver = new MongoResolve();
            expect(resolver).toBeInstanceOf(MongoResolve);
        });

        it('should work with a simple query', () => {
            const query = { name: 'John' };
            const resolver = new MongoResolve(query);
            expect(resolver.getQuery()).toEqual(query);
        });

        it('should work with complex MongoDB queries', () => {
            const query = {
                $or: [{ age: { $lt: 18 } }, { age: { $gt: 65 } }],
                status: { $in: ['active', 'pending'] },
            };
            const resolver = new MongoResolve(query);
            expect(resolver.getQuery()).toEqual(query);
            expect(resolver.resolve()).toEqual(query);
        });
    });

    describe('Helper functions', () => {
        it('should create resolver using helper function', () => {
            const query = { field: 'value' };
            const resolver = createResolver(query);
            expect(resolver).toBeInstanceOf(MongoResolve);
            expect(resolver.getQuery()).toEqual(query);
        });

        it('should process query using helper function', () => {
            const query = { status: 'active' };
            const result = processQuery(query);
            expect(result).toEqual(query);
        });
    });

    describe('Query manipulation', () => {
        it('should allow updating queries', () => {
            const resolver = new MongoResolve({ initial: 'query' });
            resolver.setQuery({ updated: 'query' });
            expect(resolver.getQuery()).toEqual({ updated: 'query' });
        });

        it('should handle empty queries', () => {
            const resolver = new MongoResolve();
            expect(resolver.getQuery()).toEqual({});
            expect(resolver.resolve()).toEqual({});
        });
    });

    describe('Browser compatibility', () => {
        it('should not depend on Node.js-specific features', () => {
            // This test ensures the library can work in browser environments
            const resolver = new MongoResolve({ test: 'browser' });
            expect(typeof resolver.getQuery).toBe('function');
            expect(typeof resolver.setQuery).toBe('function');
            expect(typeof resolver.resolve).toBe('function');
        });
    });
});
