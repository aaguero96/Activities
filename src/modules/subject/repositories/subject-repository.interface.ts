import { SubjectEntity } from 'src/infra/database/entities/subject.entity';
import { DeepPartial } from 'typeorm';

export const SUBJECT_REPOSITORY = Symbol('SUBJECT_REPOSITORY');

export interface ISubjectRepository {
  create(subject: DeepPartial<SubjectEntity>): Promise<SubjectEntity>;
}
