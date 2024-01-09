import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { IStudentService } from './student-service.interface';
import {
  IStudentRepository,
  STUDENT_REPOSITORY,
} from '../repositories/student-repository.interface';
import { StudentEntity } from 'src/infra/database/entities/student.entity';
import { RegisterStudentDTO } from '../dtos/register-student.dto';
import { validate } from 'class-validator';
import { plainToClass } from 'class-transformer';

@Injectable()
export class StudentService implements IStudentService {
  constructor(
    @Inject(STUDENT_REPOSITORY) private readonly _repo: IStudentRepository,
  ) {}

  async registerStudent(student: RegisterStudentDTO): Promise<StudentEntity> {
    const studentInstance = plainToClass(RegisterStudentDTO, student);
    const errors = await validate(studentInstance);
    if (errors.length) {
      throw new BadRequestException();
    }

    return this._repo.create(student);
  }
}
