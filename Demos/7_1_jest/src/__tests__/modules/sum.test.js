import sum from '../../modules/sum';

describe('Addition', () => {
    it('knows that 2 and 2 make 4', () => {
        expect(2 + 2).toBe(4);
    });

    it('sums numbers', () => {
        expect(sum(1, 2)).toEqual(3);
        expect(sum(2, 2)).toEqual(4);
    });

});

