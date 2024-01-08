import { InjectRepository } from '@nestjs/typeorm';
import { ISubjectRepository } from './subject-repository.interface';
import { SubjectEntity } from 'src/infra/database/entities/subject.entity';
import { Repository } from 'typeorm';

export class SubjectRepository implements ISubjectRepository {
  constructor(
    @InjectRepository(SubjectEntity)
    private readonly _repo: Repository<SubjectEntity>,
  ) {}
}
