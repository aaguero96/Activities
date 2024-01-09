import { StudentEntity } from 'src/infra/database/entities/student.entity';
import { RegisterStudentDTO } from '../dtos/register-student.dto';

export const STUDENT_SERVICE = Symbol('STUDENT_SERVICE');

export interface IStudentService {
  registerStudent(student: RegisterStudentDTO): Promise<StudentEntity>;
}
