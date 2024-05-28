// In this document we can add the static strings and then translate them to any language plus we can do dynamic replacements.
interface ReplaceInterface {
  value: string;
  oldValue: string;
  newValue: string;
}

interface STGInterface<T> {
  replace: {
    [K: string]: T;
  };
}

const strings = {
  description_product: 'Descripción del producto',
  quantity_products_sold: '%condition - %qty vendidos',
  buy: 'Comprar',
};

export type StringsType = typeof strings;

const replaceValue = ({
  value,
  oldValue,
  newValue,
}: ReplaceInterface): string => {
  if (value.replaceAll) return value.replaceAll(oldValue, newValue);
  return value;
};

const applyOptions = <T extends string, K>(
  value: T,
  options: STGInterface<K>,
): string => {
  const { replace } = options;
  let vTemp: string = value;
  if (replace) {
    Object.keys(replace).forEach((key) => {
      vTemp = replaceValue({
        value: vTemp,
        oldValue: key,
        newValue: `${replace[key]}`,
      });
    });
  }
  return vTemp;
};

const stg = <T extends keyof StringsType, K>(
  key: T,
  options?: STGInterface<K>,
): string => {
  if (options) {
    return applyOptions(strings[key], options);
  }
  return strings[key];
};

export default stg;
