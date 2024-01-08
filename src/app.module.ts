import { Module } from '@nestjs/common';
import { DbModule } from './infra/database/db.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    DbModule,
  ],
})
export class AppModule {}
