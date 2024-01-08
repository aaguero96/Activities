import { InjectRepository } from '@nestjs/typeorm';
import { IActivityRepository } from './activity-repository.interface';
import { ActivityEntity } from 'src/infra/database/entities/activity.entity';
import { Repository } from 'typeorm';

export class ActivityRepository implements IActivityRepository {
  constructor(
    @InjectRepository(ActivityEntity)
    private readonly _repo: Repository<ActivityEntity>,
  ) {}
}
