import { getDuration, getNow } from './Time.service';

describe('Time service', () => {
  describe('getDuration', () => {
    it('should return correct seconds, minutes, hours, days', () => {
      const startDate = '2019-03-04 09:30:26';
      const endDate = '2019-03-10 10:45:58';
      const actual = getDuration(startDate, endDate);
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
