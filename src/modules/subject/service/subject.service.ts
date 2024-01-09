import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { validate } from 'class-validator';
import { plainToClass } from 'class-transformer';
import { ISubjectService } from './subject-service.interface';
import {
  ISubjectRepository,
  SUBJECT_REPOSITORY,
} from '../repositories/subject-repository.interface';
import { RegisterSubjectDTO } from '../dtos/register-subject.dto';
import { SubjectEntity } from 'src/infra/database/entities/subject.entity';

@Injectable()
export class SubjectService implements ISubjectService {
  constructor(
    @Inject(SUBJECT_REPOSITORY) private readonly _repo: ISubjectRepository,
  ) {}

  async registerSubject(student: RegisterSubjectDTO): Promise<SubjectEntity> {
    const subjectInstance = plainToClass(RegisterSubjectDTO, student);
    const errors = await validate(subjectInstance);
    if (errors.length) {
      throw new BadRequestException();
    }

    return this._repo.create(subjectInstance);
  }
}
