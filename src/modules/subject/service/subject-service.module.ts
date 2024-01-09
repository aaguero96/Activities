import { Module } from '@nestjs/common';
import { createClassProvider } from 'src/shared/helpers/use-class.helper';
import { SUBJECT_SERVICE } from './subject-service.interface';
import { SubjectRepositoryModule } from '../repositories/subject-repository.module';
import { SubjectService } from './subject.service';

@Module({
  imports: [SubjectRepositoryModule],
  providers: [createClassProvider(SUBJECT_SERVICE, SubjectService)],
  exports: [SUBJECT_SERVICE],
})
export class SubjectServiceModule {}
