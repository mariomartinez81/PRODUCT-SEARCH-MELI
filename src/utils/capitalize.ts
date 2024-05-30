const capitalizeOne = (str: string) =>
  str?.charAt?.(0).toUpperCase?.().concat?.(str?.slice?.(1)?.toLowerCase?.());
function capitalizeSentence(str: string) {
  const regex = /_/g;
  const strCapitalize = str
    ? str
        .replace(regex, ' ')
        ?.split(' ')
        .map(word => capitalizeOne(word))
    : null;
  return strCapitalize?.join(' ') ?? str;
}

export { capitalizeOne, capitalizeSentence };
