interface IParameters {
  style: string;
  currency: string;
  minimumFractionDigits?: number;
  maximumFractionDigits?: number;
}
interface ICurrencyFormat {
  value?: number | string;
  minFraction?: number;
  maxFraction?: number;
  currency?: string;
}
export default function currencyFormat({
  value,
  currency,
  minFraction,
  maxFraction,
}: ICurrencyFormat): string {
  if (Number.isNaN(Number(value))) {
    return '$0.00';
  }
  const newValue = Number(value);
  const parametersInit: IParameters = {
    style: 'currency',
    currency: currency ?? 'USD',
  };
  let currencySymbol = 'en-US';
  if (minFraction) parametersInit.minimumFractionDigits = minFraction;
  if (maxFraction) parametersInit.maximumFractionDigits = maxFraction;
  if (currency === 'MXN') currencySymbol = 'es-MX';

  return new Intl.NumberFormat(currencySymbol, { ...parametersInit }).format(
    newValue,
  );
}

export const moneyMask = (value?: string) => {
  const newValue = value?.replace('.', '').replace(',', '').replace(/\D/g, '');
  const options = { minimumFractionDigits: 2 };
  const result = new Intl.NumberFormat('en-US', options).format(
    parseFloat(newValue!) / 100,
  );
  return Number.isNaN(+result) ? '0.00' : result;
};

export const unMoneyMask = (currency: string) =>
  Number(currency?.replace ? currency?.replace(/[^0-9.-]+/g, '') : 0);

export const validateAmericanNumberFormat = (number: string) => {
  const pattern = /^[-$]?\d+(,\d{3})*(\.\d+)?$/;
  return pattern?.test(number);
};

export const cleanNumber = (number: any) => {
  const rawNumber = Number(number);
  return !Number.isNaN(rawNumber) ? rawNumber : 0;
};

export const stringToNumberWithDecimals = (number: string) =>
  parseFloat(number).toFixed(2);
