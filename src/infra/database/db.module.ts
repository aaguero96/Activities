import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
// configService: ConfigService
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async () => {
        return {
          type: 'postgres',
          logger: null,
          host: 'localhost',
          port: 5432,
          username: 'root',
          password: 'root',
          database: 'pg-db',
          entities: [join(__dirname, './entities/**/*.entity{.js,.ts}')],
          migrations: [join(__dirname, './migrations/**/*{.js,.ts}')],
          autoLoadEntities: true,
          synchronize: true,
        };
      },
    }),
  ],
})
export class DbModule {}
