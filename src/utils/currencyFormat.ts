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

export const stringToNumberWithDecimals = (number: string) =>
  parseFloat(number).toFixed(2);
