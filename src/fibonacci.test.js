const fibonacci = require('./fibonacci');

describe('fibonacci', () => {
 
    it('returns [0, 1] if n is 2', () => {
        expect(fibonacci(2)).toEqual([0, 1]);
    });

    it('returns [0, 1, 1] if n is 3', () => {
        expect(fibonacci(3)).toEqual([0, 1, 1]);
    });

    it('returns [0, 1, 1, 2, 3, 5, 8, 13, 21, 34] if n is 10', () => {
        expect(fibonacci(10)).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);
    }
    );


});