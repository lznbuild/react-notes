import { getFileBaseName } from "./download";

/**
 * @description 获取文件后缀 ex: happy.png => .png
 * @param fileName 文件名
 */
export function getFileExtname(fileName: string): string {
  return fileName.replace(/.*(\.\w+)(\?.*)?$/i, '$1');
}

/**
 * @description 将 img 元素转换为 Base64编码字符串
 * @param image
 */
export function img2Base64DataUrl(image: HTMLImageElement): string {
  const canvas = document.createElement('canvas');
  canvas.width = image.width;
  canvas.height = image.height;
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = 'rgba(255, 255, 255, 0)';
  ctx.drawImage(image, 0, 0, image.width, image.height);
  const ext = getFileExtname(image.src).replace('.', '') || 'png';
  return canvas.toDataURL(`image/${ext}`);
}


/**
 * 解码路径获得文件名
 * @param fileUrl 文件路径
 */
export function getFileNameFromEncodeUrl(fileUrl: string): string {
  try {
    return decodeURIComponent(atob(fileUrl.replace(/.*\/\d*_([\w|=]*)\.\w*$/g, '$1')));
  } catch {
    return getFileBaseName(fileUrl, true);
  }
}