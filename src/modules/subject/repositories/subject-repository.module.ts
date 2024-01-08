import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SubjectEntity } from 'src/infra/database/entities/subject.entity';
import { createClassProvider } from 'src/shared/helpers/use-class';
import { SUBJECT_REPOSITORY } from './subject-repository.interface';
import { SubjectRepository } from './subject.repository';

@Module({
  imports: [TypeOrmModule.forFeature([SubjectEntity])],
  providers: [createClassProvider(SUBJECT_REPOSITORY, SubjectRepository)],
  exports: [SUBJECT_REPOSITORY],
})
export class SubjectRepositoryModule {}
