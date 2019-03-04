import { getDuration } from './Time.service';

describe('Time service', () => {
  describe('getDuration', () => {
    it('should return correct seconds, minutes, hours, days', () => {
      const date1 = '2019-03-10 10:45:58';
      const date2 = '2019-03-04 09:30:26';
      const actual = getDuration(date1, date2);
      const expected = {
        days: 6,
        minutes: 15,
        hours: 1,
        seconds: 32
      };
      expect(actual).toEqual(expected);
    });
  });
});
