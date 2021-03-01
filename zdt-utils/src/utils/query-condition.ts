import { isPhone } from "./phone";
import { omit } from 'lodash-es';

function isNumber(keyword: any): boolean {
  return typeof keyword === 'number' || String(parseInt(keyword, 10)) === keyword;
}

function parseKeyword(
  keyword: string,
  nameAttr = 'name',
  idsAttr = 'ids',
  phoneAttr = 'phone',
  emailAttr = 'email',
): Record<string, string | number[]> {
  if (Number.isInteger(+keyword)) {
    if (isPhone(keyword)) {
      return {
        [phoneAttr]: keyword,
      };
    }
    return {
      [idsAttr]: [parseInt(keyword, 10)],
    };
  }

  // 邮箱
  if (/^[a-zA-Z0-9]+([._\\-]*[a-zA-Z0-9])*@([a-zA-Z0-9]+[-a-zA-Z0-9]*[a-zA-Z0-9]+.){1,63}[a-zA-Z0-9]+$/.test(keyword)) {
    return { [emailAttr]: keyword };
  }

  // 默认姓名
  return {
    [nameAttr]: keyword,
  };
}

function parseKeywords(
  keywords: (string | number)[],
  namesAttr = 'names',
  idsAttr = 'ids',
  phonesAttr = 'phones',
): Record<string, (string | number)[]> {
  if (keywords.every((keyword) => isNumber(+keyword) && !isNaN(+keyword))) {
    if (keywords.every((keyword) => isPhone(keyword as string))) {
      return {
        [phonesAttr]: keywords,
      };
    }
    return {
      [idsAttr]: keywords,
    };
  }
  return {
    [namesAttr]: keywords,
  };
}

export function parseQueryConditionWithKeyword(
  queryCondition: Record<string, any>,
  nameAttr = 'name',
  idsAttr = 'ids',
  phoneAttr = 'phone',
  emailAttr = 'email',
  keywordAttr = 'keyword',
): Record<string, any> {
  const keyword = queryCondition[keywordAttr];
  const params = omit({ ...queryCondition }, keywordAttr);
  if (keyword) {
    return {
      ...params,
      ...parseKeyword(keyword, nameAttr, idsAttr, phoneAttr, emailAttr),
    };
  }
  return params;
}

// 多名字，多 id，多 phone搜索，支持空格，半角全角逗号分隔
export function parseQueryConditionWithKeywords(
  // eslint-disable-next-line @typescript-eslint/ban-types
  queryCondition: Object,
  namesAttr = 'names',
  idsAttr = 'ids',
  phonesAttr = 'phones',
  keywordAttr = 'keyword',
  // eslint-disable-next-line @typescript-eslint/ban-types
): Object {
  const keyword = queryCondition[keywordAttr];
  const params = omit({ ...queryCondition }, keywordAttr);
  if (keyword) {
    // 把空格和全角 '，' 号替换为英文 ',',再用','号分隔为数组，过滤掉不合法的数据
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    const formattedKeywords = `${keyword}`
      .replace(/[\s+|，]/g, ',')
      .split(',')
      .filter((item) => !!item);
    return {
      ...params,
      ...parseKeywords(formattedKeywords, namesAttr, idsAttr, phonesAttr),
    };
  }
  return params;
}