import { getContrast } from './Color.service';

describe('Color service', () => {
  describe('getContrast', () => {
    it('should return black when passing a lighter color', () => {
      const actual = getContrast('#f4f5f6');
      const expected = 'black';
      expect(actual).toEqual(expected);
    });
    it('should return white when passing a darker color', () => {
      const actual = getContrast('#094564');
      const expected = 'white';
      expect(actual).toEqual(expected);
    });
  });
});
