import { Body, Controller, Inject, Post } from '@nestjs/common';
import { StudentEntity } from 'src/infra/database/entities/student.entity';
import {
  IStudentService,
  STUDENT_SERVICE,
} from '../../service/student-service.interface';
import { RegisterStudentDTO } from '../../dtos/register-student.dto';

@Controller('/student')
export class StudentPostController {
  constructor(
    @Inject(STUDENT_SERVICE) private readonly _service: IStudentService,
  ) {}

  @Post('/register')
  async registerStudent(
    @Body() student: RegisterStudentDTO,
  ): Promise<StudentEntity> {
    console.log(student);
    return this._service.registerStudent(student);
  }
}
