import { Module } from '@nestjs/common';
import { SubjectServiceModule } from '../service/subject-service.module';
import { SubjectPostController } from './posts/subject-post.controller';

@Module({
  imports: [SubjectServiceModule],
  controllers: [SubjectPostController],
})
export class SubjectRestModule {}
