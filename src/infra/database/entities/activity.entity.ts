import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { StudentEntity } from './student.entity';
import { ActivityStatus } from './enums/activity-status.enum';

@Entity('activities')
export class ActivityEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'status', type: 'enum', enum: ActivityStatus })
  status: ActivityStatus;

  @Column({ name: 'value', type: 'float' })
  value: number;

  @Column({ name: 'description', type: 'varchar', nullable: true })
  description?: string;

  @Column({ name: 'expired_time', type: 'time' })
  expiredTime: string;

  @Column({ name: 'starts_at', type: 'timestamp with time zone' })
  startsAt: Date;

  @Column({ name: 'ends_at', type: 'timestamp with time zone' })
  endsAt: Date;

  @ManyToOne(() => StudentEntity)
  @JoinColumn({ name: 'student_id', referencedColumnName: 'id' })
  student: StudentEntity;
}
