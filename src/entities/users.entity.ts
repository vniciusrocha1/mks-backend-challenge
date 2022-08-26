import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
@Entity('tbl_users')
export class UsersEntity {
    @PrimaryGeneratedColumn('uuid')
    readonly id: string;
    @Column({ name: 'usr_title', type: 'varchar', length: 255 })
    title: string;
    @Column({ name: 'usr_overview', type: 'text' })
    overview: string;
    @Column({ name: 'usr_release_date', type: 'date' })
    release_date: Date;
    @Column({ name: 'usr_is_adult', type: 'bool', default: false })
    is_adult: boolean;
    @CreateDateColumn({ name: 'usr_created_at' })
    readonly created_at: Date;
    @UpdateDateColumn({ name: 'usr_updated_at' })
    readonly updated_at: Date;
}
