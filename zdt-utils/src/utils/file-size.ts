/**
 * 将以 k 为单位的数字转换成合适单位的 string，例如 getAdaptFileSize(2048) -> '2M'
 * @param size 单位为 k
 */
export function getAdaptedFileSize(size: number): string {
  const unitInfos = [
    { label: 'G', unit: 2 ** 20 },
    { label: 'M', unit: 2 ** 10 },
    { label: 'k', unit: 1 },
  ];

  // eslint-disable-next-line no-restricted-syntax
  for (const info of unitInfos) {
    const value = size / info.unit;
    if (value >= 1) {
      // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
      return +value.toFixed(1) + info.label;
    }
  }
  return '';
}