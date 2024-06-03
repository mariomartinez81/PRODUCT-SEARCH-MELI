import currencyFormat from '../../../utils/currencyFormat';
import styles from './Amount.module.sass';

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
    <div className={classNameContainer ?? styles.Amount}>
      <span className={classNameIntegerPart ?? styles.Amount__integer}>
        <span>{symbol}</span>
        {integerPart.slice(1).replace(',', '.')}
      </span>
      {decimals && (
        <span className={classNameDecimalPart ?? styles.Amount__decimal}>
          {decimalPart}
        </span>
      )}
    </div>
  );
};

export default Amount;
