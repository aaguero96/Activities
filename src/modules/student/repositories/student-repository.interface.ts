import { StudentEntity } from 'src/infra/database/entities/student.entity';
import { DeepPartial } from 'typeorm';

export const STUDENT_REPOSITORY = Symbol('STUDENT_REPOSITORY');

export interface IStudentRepository {
  create(student: DeepPartial<StudentEntity>): Promise<StudentEntity>;
}
