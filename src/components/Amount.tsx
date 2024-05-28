import React from 'react';
import currencyFormat, { moneyMask } from '../utils/currencyFormat';

interface AmountProps {
  amount?: number;
  decimals?: number;
  classNameContainer?: string;
  classNameIntegerPart?: string;
  classNameDecimalPart?: string;
}

const Amount = ({
  amount,
  decimals,
  classNameContainer,
  classNameIntegerPart,
  classNameDecimalPart,
}: AmountProps) => {
  const formattedValue = currencyFormat({
    value: amount,
    minFraction: decimals,
    maxFraction: decimals,
    // currency: 'MXN',
  });

  const [integerPart, decimalPart] = formattedValue
    // .replace('$', '')
    .trim()
    .split('.');

  const symbol = integerPart[0];

  return (
    <div className={classNameContainer ?? 'flex align-baseline'}>
      {/* <span className="currency-symbol text-lg">$</span> */}
      <span className={classNameIntegerPart ?? 'flex text-lg gap-1.5'}>
        <span>{symbol}</span>
        {integerPart.slice(1).replace(',', '.')}
      </span>
      {decimals && (
        <span className={classNameDecimalPart ?? 'text-sm self-start'}>
          {decimalPart}
        </span>
      )}
    </div>
  );
};

export default Amount;
