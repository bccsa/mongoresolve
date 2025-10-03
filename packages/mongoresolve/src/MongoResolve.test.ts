import { MongoResolve } from './MongoResolve.js';

describe('MongoResolve', () => {
    describe('constructor', () => {
        it('should create an instance with an empty query by default', () => {
            const resolver = new MongoResolve();
            expect(resolver.getQuery()).toEqual({});
        });

        it('should create an instance with the provided query', () => {
            const query = { name: 'test' };
            const resolver = new MongoResolve(query);
            expect(resolver.getQuery()).toEqual(query);
        });
    });

    describe('getQuery', () => {
        it('should return the current query', () => {
            const query = { age: { $gte: 18 } };
            const resolver = new MongoResolve(query);
            expect(resolver.getQuery()).toEqual(query);
        });
    });

    describe('setQuery', () => {
        it('should update the query', () => {
            const resolver = new MongoResolve();
            const newQuery = { status: 'active' };
            resolver.setQuery(newQuery);
            expect(resolver.getQuery()).toEqual(newQuery);
        });

        it('should replace the existing query', () => {
            const initialQuery = { old: 'query' };
            const resolver = new MongoResolve(initialQuery);
            const newQuery = { new: 'query' };
            resolver.setQuery(newQuery);
            expect(resolver.getQuery()).toEqual(newQuery);
        });
    });

    describe('resolve', () => {
        it('should return the query as-is (placeholder implementation)', () => {
            const query = { field: 'value' };
            const resolver = new MongoResolve(query);
            expect(resolver.resolve()).toEqual(query);
        });

        it('should handle complex queries', () => {
            const query = {
                $and: [{ age: { $gte: 18 } }, { status: 'active' }],
            };
            const resolver = new MongoResolve(query);
            expect(resolver.resolve()).toEqual(query);
        });
    });
});
