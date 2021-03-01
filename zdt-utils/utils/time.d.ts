export declare enum TimeUnit2Ms {
    OnSecond = 1000,
    OneMinute = 60000,
    OneHour = 3600000,
    OnDay = 216000000
}
export interface TimeUnitValue {
    hours: number;
    minutes: number;
    seconds: number;
    millSeconds: number;
}
export declare function unit2Weeks(unit: number): number[];
/**
 * Video/Audio caption time transfer: time(hh:mm:ss,S) to milliseconds
 * for example 00:00:04,776 => 4776
 * @param time
 */
export declare function transTimeStr2Ms(time: string): number;
export declare function getMsTimeFormUnitValue({ hours, minutes, seconds, millSeconds }: TimeUnitValue): number;
/**
 * Video/Audio caption time transfer: milliseconds to time(hh:mm:ss,S)
 * for example 4776 => 00:00:04,776
 * @param msTime
 */
export declare function transMs2TimeStr(msTime: number): string;
export declare function getUnitValueFromMsTime(msTime: number): TimeUnitValue;
