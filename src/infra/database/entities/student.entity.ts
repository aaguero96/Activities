import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { UniversityEntity } from './university.entity';
import { SubjectEntity } from './subject.entity';
import { ActivityEntity } from './activity.entity';

@Entity('students')
export class StudentEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'name', type: 'varchar' })
  name: string;

  @Column({ name: 'phone', type: 'varchar' })
  phone: string;

  @Column({ name: 'active', type: 'boolean', default: true })
  active?: boolean;

  @ManyToMany(() => UniversityEntity)
  @JoinTable({
    name: 'rel_student_university',
    joinColumn: { name: 'universities', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'students', referencedColumnName: 'id' },
  })
  universities: UniversityEntity[];

  @ManyToMany(() => SubjectEntity)
  @JoinTable({
    name: 'rel_student_subject',
    joinColumn: { name: 'subjects', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'students', referencedColumnName: 'id' },
  })
  subjects: SubjectEntity[];

  @OneToMany(() => ActivityEntity, (activity) => activity.student)
  activities: ActivityEntity[];
}
