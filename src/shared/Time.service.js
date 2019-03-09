import moment from 'moment';

export const Units = {
  Days: 'days',
  Hours: 'hours',
  Minutes: 'minutes',
  Seconds: 'seconds'
};

export function getDuration(startDate, endDate) {
  const startMoment = moment(startDate);
  const endMoment = moment(endDate);
  let duration = moment.duration(endMoment.diff(startMoment));
  return {
    seconds: duration.seconds(),
    minutes: duration.minutes(),
    hours: duration.hours(),
    days: Math.floor(duration.asDays())
  };
}

export function getNow() {
  return moment();
}
