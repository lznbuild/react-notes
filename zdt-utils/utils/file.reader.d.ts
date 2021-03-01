/**
 * 通过FileReader读取File文件的文本
 */
export declare function readAsText(file: File): Promise<string>;
/**
 * 通过FileReader读取File文件的的JSON对象
 */
export declare function readAsJSON(file: File): Promise<any>;
