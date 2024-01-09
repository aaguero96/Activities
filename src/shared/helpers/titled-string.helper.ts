import { trim } from './trim.helper';

export const titledString = (value: string): string => {
  const trimValue = trim(value);
  const slicedValue = trimValue.toLowerCase().split(' ');
  const titledArray = slicedValue.map(
    (element) => element.charAt(0).toUpperCase() + element.slice(1),
  );
  return titledArray.join(' ').trim();
};
