/* eslint-disable no-use-before-define */
export enum TimeUnit2Ms {
  OnSecond = 1000,
  OneMinute = 60000,
  OneHour = 3600000,
  OnDay = 216000000,
}

export interface TimeUnitValue {
  hours: number;
  minutes: number;
  seconds: number;
  millSeconds: number;
}
export function unit2Weeks(unit: number): number[] {
  return Array.from(Array(4), (_, k) => (unit - 1) * 4 + k + 1);
}

/**
 * Video/Audio caption time transfer: time(hh:mm:ss,S) to milliseconds
 * for example 00:00:04,776 => 4776
 * @param time
 */
export function transTimeStr2Ms(time: string): number {
  const timeList = time.split(':');
  return getMsTimeFormUnitValue({
    hours: +timeList[0],
    minutes: +timeList[1],
    seconds: +timeList[2].split(',')[0],
    millSeconds: +timeList[2].split(',')[1],
  });
}
export function getMsTimeFormUnitValue({ hours, minutes, seconds, millSeconds }: TimeUnitValue): number {
  return hours * TimeUnit2Ms.OneHour + minutes * TimeUnit2Ms.OneMinute + seconds * TimeUnit2Ms.OnSecond + millSeconds;
}

/**
 * Video/Audio caption time transfer: milliseconds to time(hh:mm:ss,S)
 * for example 4776 => 00:00:04,776
 * @param msTime
 */
export function transMs2TimeStr(msTime: number): string {
  const { hours, minutes, seconds, millSeconds } = getUnitValueFromMsTime(msTime);
  return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds
    .toString()
    .padStart(2, '0')},${millSeconds.toString().padStart(3, '0')}`;
}

export function getUnitValueFromMsTime(msTime: number): TimeUnitValue {
  return {
    hours: Math.floor(msTime / TimeUnit2Ms.OneHour),
    minutes: Math.floor((msTime % TimeUnit2Ms.OneHour) / TimeUnit2Ms.OneMinute),
    seconds: Math.floor((msTime % TimeUnit2Ms.OneMinute) / TimeUnit2Ms.OnSecond),
    millSeconds: Math.floor(msTime % TimeUnit2Ms.OnSecond),
  };
}