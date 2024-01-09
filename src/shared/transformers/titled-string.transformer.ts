import { Transform } from 'class-transformer';
import { titledString } from '../helpers/titled-string.helper';

export const TitledString = () => {
  return Transform((params) => titledString(params.value));
};
