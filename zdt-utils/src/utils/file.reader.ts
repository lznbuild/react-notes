/**
 * 通过FileReader读取File文件的文本
 */
export function readAsText(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const fileReader: any = new FileReader();

    fileReader.onload = () => {
      resolve(fileReader.result);
    };

    fileReader.onerror = () => {
      reject(new Error('文件读取失败'));
    };

    fileReader.readAsText(file);
  });
}

/**
 * 通过FileReader读取File文件的的JSON对象
 */
export function readAsJSON(file: File) {
  return readAsText(file).then(text => JSON.parse(text));
}