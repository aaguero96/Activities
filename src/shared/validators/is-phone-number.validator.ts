import { ValidateIf } from 'class-validator';
import { trim } from '../helpers/trim.helper';

export const IsPhoneNumber = () => {
  return ValidateIf((value) => {
    const trimValue = trim(value.phone);
    return trimValue.length === 11;
  });
};
