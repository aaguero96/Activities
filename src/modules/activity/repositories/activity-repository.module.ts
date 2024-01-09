import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ActivityEntity } from 'src/infra/database/entities/activity.entity';
import { createClassProvider } from 'src/shared/helpers/use-class.helper';
import { ACTIVITY_REPOSITORY } from './activity-repository.interface';
import { ActivityRepository } from './activity.repository';

@Module({
  imports: [TypeOrmModule.forFeature([ActivityEntity])],
  providers: [createClassProvider(ACTIVITY_REPOSITORY, ActivityRepository)],
  exports: [ACTIVITY_REPOSITORY],
})
export class ActivityRepositoryModule {}
