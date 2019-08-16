import { flatten } from '../index';

const list = [1,2, [3, 4, [5]]];

describe('functional utils', () => {
    it('should flatten listed values', () => {
        expect(flatten(list).length).toBe(5);
    });

    it('should reduce to single array', () => {
        expect(flatten(list)).toEqual([1,2,3,4,5]);
    });
});