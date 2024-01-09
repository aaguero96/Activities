import { Module } from '@nestjs/common';
import { StudentServiceModule } from '../service/student-service.module';
import { StudentPostController } from './posts/student-post.controller';

@Module({
  imports: [StudentServiceModule],
  controllers: [StudentPostController],
})
export class StudentRestModule {}
