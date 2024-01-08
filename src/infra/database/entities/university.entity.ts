import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { SubjectEntity } from './subject.entity';
import { StudentEntity } from './student.entity';

@Entity('universities')
export class UniversityEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'name', type: 'varchar' })
  name: string;

  @ManyToMany(() => SubjectEntity, (subject) => subject.universities)
  @JoinTable({
    name: 'rel_subject_university',
    joinColumn: { name: 'subjects', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'universities', referencedColumnName: 'id' },
  })
  subjects: SubjectEntity[];

  @ManyToMany(() => StudentEntity, (subject) => subject.universities)
  @JoinTable({
    name: 'rel_student_university',
    joinColumn: { name: 'students', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'universities', referencedColumnName: 'id' },
  })
  students: StudentEntity[];
}
