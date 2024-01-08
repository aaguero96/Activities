import { InjectRepository } from '@nestjs/typeorm';
import { IUniversityRepository } from './university-repository.interface';
import { UniversityEntity } from 'src/infra/database/entities/university.entity';
import { Repository } from 'typeorm';

export class UniversityRepository implements IUniversityRepository {
  constructor(
    @InjectRepository(UniversityEntity)
    private readonly _repo: Repository<UniversityEntity>,
  ) {}
}
