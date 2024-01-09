import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UniversityEntity } from 'src/infra/database/entities/university.entity';
import { createClassProvider } from 'src/shared/helpers/use-class.helper';
import { UNIVERSITY_REPOSITORY } from './university-repository.interface';
import { UniversityRepository } from './university.repository';

@Module({
  imports: [TypeOrmModule.forFeature([UniversityEntity])],
  providers: [createClassProvider(UNIVERSITY_REPOSITORY, UniversityRepository)],
  exports: [UNIVERSITY_REPOSITORY],
})
export class UniversityRepositoryModule {}
