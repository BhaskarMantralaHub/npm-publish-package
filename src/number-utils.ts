class NumberUtils {
  getRandomNumber() {
    return '10';
  }

  isNumber(str: string) {
    return typeof +str == 'number';
  }
}

export const numberUtils = new NumberUtils();
