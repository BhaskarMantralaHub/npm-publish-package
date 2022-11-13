declare class StringUtils {
    static isLowercase(str: string): boolean;
    static isUpperCase(str: string): boolean;
    static convertCase(str: string): string;
    static extractNumber(str: string): string | 0;
}

declare class NumberUtils {
    getRandomNumber(): string;
    isNumber(str: string): boolean;
}
declare const numberUtils: NumberUtils;

export { StringUtils, numberUtils };
