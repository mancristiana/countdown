import moment from 'moment';

export const Units = {
  Days: 'days',
  Hours: 'hours',
  Minutes: 'minutes',
  Seconds: 'seconds'
};

export function getDuration(date1, date2) {
  const moment1 = moment(date1);
  const moment2 = moment(date2);
  let duration = moment.duration(moment1.diff(moment2));
  return {
    seconds: duration.seconds(),
    minutes: duration.minutes(),
    hours: duration.hours(),
    days: Math.floor(duration.asDays())
  };
}
