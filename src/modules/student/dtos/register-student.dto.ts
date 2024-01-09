import { IsString } from 'class-validator';
import { TitledString } from 'src/shared/transformers/titled-string.transformer';
import { Trim } from 'src/shared/transformers/trim.transformer';
import { IsPhoneNumber } from 'src/shared/validators/is-phone-number.validator';

export class RegisterStudentDTO {
  @IsString()
  @TitledString()
  name: string;

  @IsPhoneNumber()
  @Trim()
  phone: string;
}
