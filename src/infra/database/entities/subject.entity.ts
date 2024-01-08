import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { UniversityEntity } from './university.entity';
import { StudentEntity } from './student.entity';

@Entity('subjects')
export class SubjectEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'name', type: 'varchar' })
  name: string;

  @ManyToMany(() => UniversityEntity, (university) => university.subjects)
  @JoinTable({
    name: 'rel_subject_university',
    joinColumn: { name: 'universities', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'subjects', referencedColumnName: 'id' },
  })
  universities: UniversityEntity[];

  @ManyToMany(() => StudentEntity, (student) => student.subjects)
  @JoinTable({
    name: 'rel_student_subject',
    joinColumn: { name: 'students', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'subjects', referencedColumnName: 'id' },
  })
  students: StudentEntity[];
}
