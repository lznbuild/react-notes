export function safeParse(str: string, errorData: Array<any>): Array<any> {
  try {
    return JSON.parse(str);
  } catch (error) {
    return errorData;
  }
}

export function safeParseToString(current: Object, errorData: string): string {
  try {
    return JSON.stringify(current);
  } catch (error) {
    return errorData;
  }
}