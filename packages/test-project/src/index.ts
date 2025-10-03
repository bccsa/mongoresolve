import { MongoResolve } from 'mongoresolve';

/**
 * Example usage of the MongoResolve library
 */
export function createResolver(query?: any): MongoResolve {
    return new MongoResolve(query);
}

/**
 * Example function that uses MongoResolve
 */
export function processQuery(query: any): any {
    const resolver = new MongoResolve(query);
    return resolver.resolve();
}
