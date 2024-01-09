import { Transform } from 'class-transformer';
import { trim } from '../helpers/trim.helper';

export const Trim = () => {
  return Transform((params) => trim(params.value));
};
