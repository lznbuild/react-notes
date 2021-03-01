/**
 * 将输入内容转换为字符串
 */

export function normalizeStr(str: any) {
  return String(str).trim();
}

export function isPhone(phone: string) {
  return /^1\d{10}$/.test(normalizeStr(phone));
}