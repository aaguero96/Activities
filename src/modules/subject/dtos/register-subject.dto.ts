import { IsString } from 'class-validator';
import { TitledString } from 'src/shared/transformers/titled-string.transformer';

export class RegisterSubjectDTO {
  @TitledString()
  @IsString()
  name: string;
}
