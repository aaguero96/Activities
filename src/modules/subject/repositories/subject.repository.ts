import { InjectRepository } from '@nestjs/typeorm';
import { ISubjectRepository } from './subject-repository.interface';
import { SubjectEntity } from 'src/infra/database/entities/subject.entity';
import { DeepPartial, Repository } from 'typeorm';
import { InternalServerErrorException } from '@nestjs/common';

export class SubjectRepository implements ISubjectRepository {
  constructor(
    @InjectRepository(SubjectEntity)
    private readonly _repo: Repository<SubjectEntity>,
  ) {}

  async create(subject: DeepPartial<SubjectEntity>): Promise<SubjectEntity> {
    try {
      const entity = this._repo.create(subject);
      return this._repo.save(entity);
    } catch (e) {
      throw new InternalServerErrorException();
    }
  }
}
