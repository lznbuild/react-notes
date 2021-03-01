export function copy2Clipboard(content: string): void {
  const text = document.createElement('textarea');
  document.body.appendChild(text);
  text.value = content;
  text.style.position = 'fixed';
  text.style.top = '0px';
  text.style.left = '0px';
  text.focus();
  text.select();
  document.execCommand('copy');
  document.body.removeChild(text);
}