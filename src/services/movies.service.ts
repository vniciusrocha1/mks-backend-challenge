import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IResponseMessage } from 'src/interfaces';
import { MoviesParamsDTO, MoviesPATCHBodyDTO, MoviesPOSTBodyDTO } from 'src/dtos/movies.dto';
import { MoviesEntity } from 'src/entities/movies.entity';
import { Repository } from 'typeorm';
@Injectable()
export class MoviesService {
    constructor(
        @InjectRepository(MoviesEntity)
        private repository: Repository<MoviesEntity>,
    ) {}
    async save(data: MoviesPOSTBodyDTO): Promise<MoviesEntity> {
        const created = this.repository.create(data);
        return await this.repository.save(created);
    }
    async getAll(): Promise<MoviesEntity[]> {
        return await this.repository.find();
    }
    async getOne({ id }: MoviesParamsDTO): Promise<MoviesEntity> {
        return await this.repository.findOne({ where: { id } });
    }
    async update({ id }: MoviesParamsDTO, data: MoviesPATCHBodyDTO): Promise<MoviesEntity> {
        await this.repository.update(id, data);
        return await this.getOne({ id });
    }
    async delete({ id }: MoviesParamsDTO): Promise<IResponseMessage> {
        await this.repository.delete(id);
        return { statusCode: 200, message: 'successfully deleted!' };
    }
}
