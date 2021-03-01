/**
 * 将 Base64 的字符串转为 Blob
 * @param dataUrl base64编码的字符串
 */
export declare function dataURL2Blob(dataUrl: string): Blob;
/**
 * 根据 url 获取 Blob 类型文件
 * @param url 在线文件地址
 */
export declare function getBlobByUrl(url: string): Promise<Blob>;
/**
 * @description 获取文件名
 * @param fileUrl 文件路径
 * @param isNeedPostPrefix 是否保留文件后缀
 */
export declare function getFileBaseName(fileUrl: string, isNeedPostPrefix?: boolean): string;
/**
 * 以指定文件名下载文件
 * @param url 在线文件地址
 * @param filename 指定保存文件名
 */
export declare function downloadFileByUrl(url: string, filename?: string): Promise<void>;
export declare function download(url: string, name: string): Promise<void>;
/**
 * 将 Blob 类型文件保存为指定文件名文件
 * @param blob Blob类型文件
 * @param filename 指定保存的文件名
 */
export declare function saveAs(blob: Blob, filename: string): void;
interface UrlObjType {
    name: string;
    url: string;
}
export declare function downLoadMoreFile(urlObjs: UrlObjType[]): Promise<void>;
export {};
