let lastId = 0;

export function uniqueKey(prefix='id') {
    lastId++;
    return `${prefix}${lastId}`;
}