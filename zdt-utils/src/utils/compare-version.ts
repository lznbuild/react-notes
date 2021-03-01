/**
 * 版本比较函数
 * eg: '1.0.1' > '1.0.0' true
 * 建议用法:
 * compareVersion(a, b) > 0
 */
export const compareVersion = (left: string, right: string): number => {
  if (typeof left !== 'string' || typeof right !== 'string') {
      console.error('params should be string');
      return -1;
  }
  const lArr = left.split('.');
  const rArr = right.split('.');
  for (let i = 0; i < Math.max(lArr.length, rArr.length); i ++) {
      if ((lArr[i] && !rArr[i] && +lArr[i] > 0) || (+lArr[i] > +rArr[i] )) {
          return 1;
      } else if ((!lArr[i] && rArr[i] && +rArr[i] > 0) || (+lArr[i] < +rArr[i] )) {
          return -1;
      }
  }
  return 0;
};