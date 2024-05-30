import currencyFormat from '../utils/currencyFormat';

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
  });

  const [integerPart, decimalPart] = formattedValue.trim().split('.');

  const symbol = integerPart[0];

  return (
    <div className={classNameContainer ?? 'flex align-baseline'}>
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
