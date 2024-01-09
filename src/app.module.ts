import { Module } from '@nestjs/common';
import { DbModule } from './infra/database/db.module';
import { ConfigModule } from '@nestjs/config';
import { StudentRestModule } from './modules/student/rest/student-rest.module';
import { SubjectRestModule } from './modules/subject/rest/subject-rest.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    DbModule,
    StudentRestModule,
    SubjectRestModule,
  ],
})
export class AppModule {}
