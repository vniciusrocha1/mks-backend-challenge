import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
@Entity('tbl_movies')
export class MoviesEntity {
  @PrimaryGeneratedColumn('uuid')
  readonly id: string;
  @Column({ name: 'mvi_title', type: 'varchar', length: 255 })
  title: string;
  @Column({ name: 'mvi_overview', type: 'text' })
  overview: string;
  @Column({ name: 'mvi_release_date', type: 'date' })
  release_date: Date;
  @Column({ name: 'mvi_is_adult', type: 'bool', default: false })
  is_adult: boolean;
  @CreateDateColumn({ name: 'mvi_created_at' })
  readonly created_at: Date;
  @UpdateDateColumn({ name: 'mvi_updated_at' })
  readonly updated_at: Date;
}
