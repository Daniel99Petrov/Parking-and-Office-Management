import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';

@Entity()
export class Reservation {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  start: Date;

  @Column({ nullable: false })
  end: Date;

  @Column({})
  comment: string;

  @Column({ name: 'spot_id', nullable: false, type: 'uuid' })
  spotId: string;

  @Column({ name: 'user_id', nullable: false, type: 'uuid' })
  userId: string;

  @CreateDateColumn({ type: 'timestamp', name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp', name: 'updated_at' })
  updatedAt: Date;

  @DeleteDateColumn({ type: 'timestamp', name: 'deleted_at', nullable: true })
  deletedAt: Date;

  @Column({ type: 'uuid', name: 'modified_by', nullable: false })
  modifiedBy: string;
}