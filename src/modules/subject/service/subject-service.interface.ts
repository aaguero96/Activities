import { SubjectEntity } from 'src/infra/database/entities/subject.entity';
import { RegisterSubjectDTO } from '../dtos/register-subject.dto';

export const SUBJECT_SERVICE = Symbol('SUBJECT_SERVICE');

export interface ISubjectService {
  registerSubject(student: RegisterSubjectDTO): Promise<SubjectEntity>;
}
