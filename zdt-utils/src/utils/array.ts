// 判断目标数组是否存在重复元素
export function hasRepeat<T>(arr: T[], isEqual = (a: T, b: T) => a === b) {
  return arr.some((a, index) => index !== arr.findIndex((b) => isEqual(a, b)));
}

// 判断指定元素在数组里是否重复
export function isRepeat<T>(item: T, arr: T[], isEqual = (a: T, b: T) => a === b) {
  return arr.filter((val) => isEqual(val, item)).length > 1;
}

export function sayHello() {
  return 'hellow'
}