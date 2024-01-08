import { InjectRepository } from '@nestjs/typeorm';
import { IStudentRepository } from './student-repository.interface';
import { StudentEntity } from 'src/infra/database/entities/student.entity';
import { Repository } from 'typeorm';

export class StudentRepository implements IStudentRepository {
  constructor(
    @InjectRepository(StudentEntity)
    private readonly _repo: Repository<StudentEntity>,
  ) {}
}
