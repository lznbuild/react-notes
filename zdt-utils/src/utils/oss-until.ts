export function generateUniqString () {
  return Math.random().toString(36).substr(2, 9);
};

export function generateUniqColor(): string {
  return '#' + Math.random().toString(16).substr(2, 6).toUpperCase();
}