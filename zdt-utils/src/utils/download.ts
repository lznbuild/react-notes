/**
 * 将 Base64 的字符串转为 Blob
 * @param dataUrl base64编码的字符串
 */
export function dataURL2Blob(dataUrl: string): Blob {
  const arr = dataUrl.split(',');
  const mime = arr[0].match(/:(.*?);/)[1];
  const bStr = atob(arr[1]);
  let n = bStr.length;
  const u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bStr.charCodeAt(n);
  }
  return new Blob([u8arr], { type: mime });
}

/**
 * 根据 url 获取 Blob 类型文件
 * @param url 在线文件地址
 */
export function getBlobByUrl(url: string): Promise<Blob> {
  return new Promise((resolve) => {
    const xhr = new XMLHttpRequest();
    // NOTE: 避免 200 from disk cache
    const ossUrl = url.replace('fbcontent.cn', 'oss-cn-beijing.aliyuncs.com') + `?r=${Math.random().toString(36).substr(2, 9)}`;
    xhr.open('GET', ossUrl, true);
    xhr.responseType = 'blob';
    xhr.onload = () => {
      if (xhr.status === 200) {
        resolve(xhr.response);
      }
    };
    xhr.send();
  });
}



/**
 * @description 获取文件名
 * @param fileUrl 文件路径
 * @param isNeedPostPrefix 是否保留文件后缀
 */
export function getFileBaseName(fileUrl: string, isNeedPostPrefix?: boolean): string {
  return isNeedPostPrefix ? fileUrl.replace(/^(.*\/)?(.+\.\w+)(\?.*)?$/g, '$2') : fileUrl.replace(/^(.*\/)?(.+)\.\w+(\?.*)?$/g, '$2');
}


/**
 * 以指定文件名下载文件
 * @param url 在线文件地址
 * @param filename 指定保存文件名
 */
export async function downloadFileByUrl(url: string, filename?: string): Promise<void> {
  const blob = await getBlobByUrl(url);
  const newFilename = filename ?? getFileBaseName(url, true);
  // eslint-disable-next-line @typescript-eslint/await-thenable
  await saveAs(blob, newFilename);
}

export async function download(url: string, name: string) {
  const a = document.createElement('a');
  a.download = name;
  a.href = url;
  a.style.display = 'none';
  document.body.append(a);
  a.click();

  // Chrome requires the timeout
  // await delay(100);
  a.remove();
}


/**
 * 将 Blob 类型文件保存为指定文件名文件
 * @param blob Blob类型文件
 * @param filename 指定保存的文件名
 */
export function saveAs(blob: Blob, filename: string): void {
  if (window.navigator.msSaveOrOpenBlob) {
    navigator.msSaveBlob(blob, filename);
  } else {
    const anchor = document.createElement('a');
    const body = document.querySelector('body');
    anchor.href = window.URL.createObjectURL(blob);
    anchor.download = filename;

    anchor.style.display = 'none';
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
    body!.appendChild(anchor);

    anchor.click();
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
    body!.removeChild(anchor);

    window.URL.revokeObjectURL(anchor.href);
  }
}

interface UrlObjType {
  name: string;
  url: string;
}
export async function downLoadMoreFile(urlObjs: UrlObjType[]) {
  for (let i = 0; i < urlObjs.length; i++) {
    const { name, url } = urlObjs[i];
    await delay(1000 * i);
    const blob = await getBlobByUrl(url);
    // eslint-disable-next-line @typescript-eslint/await-thenable
    await saveAs(blob, name);
  }
}

function delay(ms: number) {
  return new Promise<void>((resolve) => setTimeout(() => resolve(), ms));
}