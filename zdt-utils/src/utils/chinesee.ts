const ChineseNumbers = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九'];
const ChineseCharUnits = ['', '十', '百', '千'];
const ChineseSectionUnits = ['', '万', '亿', '兆'];
const ChineseUnit2Value = {
  十: 10,
  百: 100,
  千: 1000,
  万: 10000,
  亿: 100000000,
  兆: 10000000000000000,
};

/**
 * 阿拉伯数字转中文数字（ps. 特殊处理 '一十' 开头的为 '十', 例如十二，十二万等）
 * @param value
 */
export function number2Chinese(value: number): string {
  const numbers = value
    .toString()
    .split('')
    .reverse()
    .map((char) => +char);
  return numbers
    .map((item, index) => {
      if (item === 0 && (index === 0 || numbers[index - 1] === 0)) {
        return '';
      }
      if (item > 0) {
        return ChineseNumbers[item] + ChineseCharUnits[index % 4] + ChineseSectionUnits[Math.floor(index / 4)];
      }
      return ChineseNumbers[item];
    })
    .reverse()
    .join('')
    .replace(/^一十/, '十');
}

/**
 * 中文数字转阿拉伯数字
 * @param text
 */
export function chinese2Number(text: string): number {
  if (!text.length) {
    return undefined;
  }
  let finalNum = 0;
  Array.from(text).reduce(
    (preChar, char, index) => {
      const unitValue = ChineseUnit2Value[char];
      const numberValue = ChineseNumbers.findIndex((num) => num === char);
      const preUnitValue = ChineseUnit2Value[preChar];
      const preNumberValue = ChineseNumbers.findIndex((num) => num === preChar);

      if (unitValue && preNumberValue > -1) {
        finalNum += preNumberValue * unitValue;
        return char;
      }

      if (unitValue && !!preUnitValue) {
        finalNum *= unitValue;
        return char;
      }

      if (numberValue > -1 && index === text.length - 1) {
        finalNum += numberValue;
        return char;
      }
      return char;
    },
    ChineseUnit2Value[text[0]] ? '一' : '',
  );
  return finalNum;
}