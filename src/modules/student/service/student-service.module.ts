import { Module } from '@nestjs/common';
import { StudentRepositoryModule } from '../repositories/student-repository.module';
import { createClassProvider } from 'src/shared/helpers/use-class.helper';
import { STUDENT_SERVICE } from './student-service.interface';
import { StudentService } from './student.service';

@Module({
  imports: [StudentRepositoryModule],
  providers: [createClassProvider(STUDENT_SERVICE, StudentService)],
  exports: [STUDENT_SERVICE],
})
export class StudentServiceModule {}
