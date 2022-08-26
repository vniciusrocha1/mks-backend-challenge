import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IResponseMessage } from 'src/interfaces';
import { UsersParamsDTO, UsersPATCHBodyDTO, UsersPOSTBodyDTO } from 'src/dtos/users.dto';
import { UsersEntity } from 'src/entities/users.entity';
import { Repository } from 'typeorm';
import { hashSync } from 'bcryptjs';
@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(UsersEntity)
        private repository: Repository<UsersEntity>,
    ) {}
    async save(data: UsersPOSTBodyDTO): Promise<UsersEntity> {
        if (!!data?.password) data.password = this._hashField(data.password);
        const created = this.repository.create(data);
        return await this.repository.save(created);
    }
    async getAll(): Promise<UsersEntity[]> {
        return await this.repository.find();
    }
    async getOne({ id }: UsersParamsDTO): Promise<UsersEntity> {
        return await this.repository.findOne({ where: { id } });
    }
    async update({ id }: UsersParamsDTO, data: UsersPATCHBodyDTO): Promise<UsersEntity> {
        if (!!data?.password) data.password = this._hashField(data.password);
        await this.repository.update(id, data);
        return await this.getOne({ id });
    }
    async delete({ id }: UsersParamsDTO): Promise<IResponseMessage> {
        await this.repository.delete(id);
        return { statusCode: 200, message: 'successfully deleted!' };
    }
    private _hashField = (value: string) => hashSync(value, 8);
}
