import { IsString, Length } from 'class-validator';

export class RegisterStudentDTO {
  @IsString()
  name: string;

  @Length(11, 11)
  phone: string;
}
