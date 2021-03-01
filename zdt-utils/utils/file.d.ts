/**
 * @description 获取文件后缀 ex: happy.png => .png
 * @param fileName 文件名
 */
export declare function getFileExtname(fileName: string): string;
/**
 * @description 将 img 元素转换为 Base64编码字符串
 * @param image
 */
export declare function img2Base64DataUrl(image: HTMLImageElement): string;
/**
 * 解码路径获得文件名
 * @param fileUrl 文件路径
 */
export declare function getFileNameFromEncodeUrl(fileUrl: string): string;
