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
  error_text: 'Copiar texto de error',
  sorry_we_could_not_load_the_page: `Lo sentimos, no pudimos cargar la página.`,
  there_was_an_issue_proccessing_your_request:
    'Hubo un problema procesando tu petición. \nArreglaremos las cosas lo antes posible.',
  if_you_need_immediate_assistance:
    'Si necesita asistencia inmediata, comuníquese con nosotros al',
  back_to_home: 'Regrese a la página de inicio',
  products_not_found: 'No se encontraron productos',
  please_search_another_option: 'por favor buscar otra opción',
  this_product_does_not_description: 'Este producto no tiene descripción',
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
