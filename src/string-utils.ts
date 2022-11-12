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
}
