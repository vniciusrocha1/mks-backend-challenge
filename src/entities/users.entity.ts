import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
@Entity('tbl_users')
export class UsersEntity {
    @PrimaryGeneratedColumn('uuid')
    readonly id: string;
    @Column({ name: 'usr_name', type: 'varchar', length: 255 })
    name: string;
    @Column({ name: 'usr_cpf', type: 'char', length: 11, unique: true })
    cpf: string;
    @Column({ name: 'usr_birthdate', type: 'date' })
    birthdate: Date;
    @Column({ name: 'usr_cellphone', type: 'char', length: 13, unique: true })
    cellphone: string;
    @Column({ name: 'usr_email', type: 'varchar', length: 255, unique: true, readonly: true })
    email: string;
    @Column({ name: 'usr_password', type: 'text' })
    password: string;
    @CreateDateColumn({ name: 'usr_created_at' })
    readonly created_at: Date;
    @UpdateDateColumn({ name: 'usr_updated_at' })
    readonly updated_at: Date;
}
