const convertBinaryToDecimal = (binNum: string): number => {
  return parseInt(binNum, 2);
};

const convertDecimalToBinary = (decNum: number, digit: number = 64): string => {
  return decNum.toString(2).padStart(digit, "0");
};

const convertDecimalToHexadecimal = (
  decNum: number,
  digit: number = 16
): string => {
  return decNum.toString(16).padStart(digit, "0");
};

const convertHexadecimalToDecimal = (hexNum: string): number => {
  return parseInt(hexNum, 16);
};

export const radixConverter = {
  convertBinaryToDecimal,
  convertDecimalToBinary,
  convertDecimalToHexadecimal,
  convertHexadecimalToDecimal,
};
