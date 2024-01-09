import { InjectRepository } from '@nestjs/typeorm';
import { IStudentRepository } from './student-repository.interface';
import { StudentEntity } from 'src/infra/database/entities/student.entity';
import { DeepPartial, Repository } from 'typeorm';
import { InternalServerErrorException } from '@nestjs/common';

export class StudentRepository implements IStudentRepository {
  constructor(
    @InjectRepository(StudentEntity)
    private readonly _repo: Repository<StudentEntity>,
  ) {}

  async create(student: DeepPartial<StudentEntity>): Promise<StudentEntity> {
    try {
      const entity = this._repo.create(student);
      return this._repo.save(entity);
    } catch (e) {
      throw new InternalServerErrorException();
    }
  }
}
