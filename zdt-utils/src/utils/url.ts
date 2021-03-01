import { parse } from 'query-string';

export function getQueryParmas(): { [key: string]: string | string[] } {
  return parse(window.location.href.split('?').pop());
}