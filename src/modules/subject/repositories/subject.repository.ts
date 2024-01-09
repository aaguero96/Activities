import { InjectRepository } from '@nestjs/typeorm';
import { ISubjectRepository } from './subject-repository.interface';
import { SubjectEntity } from 'src/infra/database/entities/subject.entity';
import { DeepPartial, Repository } from 'typeorm';

export class SubjectRepository implements ISubjectRepository {
  constructor(
    @InjectRepository(SubjectEntity)
    private readonly _repo: Repository<SubjectEntity>,
  ) {}

  async create(subject: DeepPartial<SubjectEntity>): Promise<SubjectEntity> {
    const entity = this._repo.create(subject);
    return this._repo.save(entity);
  }
}
