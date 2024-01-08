import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentEntity } from 'src/infra/database/entities/student.entity';
import { createClassProvider } from 'src/shared/helpers/use-class';
import { STUDENT_REPOSITORY } from './student-repository.interface';
import { StudentRepository } from './student.repository';

@Module({
  imports: [TypeOrmModule.forFeature([StudentEntity])],
  providers: [createClassProvider(STUDENT_REPOSITORY, StudentRepository)],
  exports: [STUDENT_REPOSITORY],
})
export class StudentRepositoryModule {}
