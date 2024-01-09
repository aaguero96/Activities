export const trim = (value: string): string => {
  const slicedValue = value.split(' ');
  const trimArray = slicedValue.map((element) => element.trim());
  return trimArray.filter((element) => element).join(' ');
};
