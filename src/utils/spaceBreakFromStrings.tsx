/* eslint-disable import/prefer-default-export */
export const spaceBreakFromStrings = (stringToFormat: string) => {
  if (!stringToFormat) return '';
  const newStr = stringToFormat?.split('\n');
  return newStr?.length
    ? newStr?.map((srt: string, index: number) => {
        const key = `line-${index}`;
        return (
          <div key={key}>
            {srt} {newStr?.length - 1 !== index && <br />}
          </div>
        );
      })
    : stringToFormat;
};
