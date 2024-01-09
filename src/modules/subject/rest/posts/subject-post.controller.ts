import { Body, Controller, Inject, Post } from '@nestjs/common';
import {
  ISubjectService,
  SUBJECT_SERVICE,
} from '../../service/subject-service.interface';
import { RegisterSubjectDTO } from '../../dtos/register-subject.dto';
import { SubjectEntity } from 'src/infra/database/entities/subject.entity';

@Controller('/subject')
export class SubjectPostController {
  constructor(
    @Inject(SUBJECT_SERVICE) private readonly _service: ISubjectService,
  ) {}

  @Post('/register')
  async registerSubject(
    @Body() subject: RegisterSubjectDTO,
  ): Promise<SubjectEntity> {
    return this._service.registerSubject(subject);
  }
}
