import { numberUtils } from './number-utils';

export class StringUtils {
  static isLowercase(str: string) {
    return str.toLowerCase() == str;
  }

  static isUpperCase(str: string) {
    return str.toUpperCase() == str;
  }

  static convertCase(str: string) {
    return this.isUpperCase(str) ? str.toLowerCase() : str.toUpperCase();
  }

  static extractNumber(str: string) {
    const regExpMatchArray = str.match('[0-9]+');
    if (regExpMatchArray == null) return 0;
    if (numberUtils.isNumber(regExpMatchArray[0])) return regExpMatchArray[0];
    throw new Error('No Number found');
  }
}
