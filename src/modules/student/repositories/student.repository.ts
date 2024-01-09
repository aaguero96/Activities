import { InjectRepository } from '@nestjs/typeorm';
import { IStudentRepository } from './student-repository.interface';
import { StudentEntity } from 'src/infra/database/entities/student.entity';
import { DeepPartial, Repository } from 'typeorm';

export class StudentRepository implements IStudentRepository {
  constructor(
    @InjectRepository(StudentEntity)
    private readonly _repo: Repository<StudentEntity>,
  ) {}

  async create(student: DeepPartial<StudentEntity>): Promise<StudentEntity> {
    const entity = this._repo.create(student);
    return this._repo.save(entity);
  }
}
