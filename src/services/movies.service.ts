import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
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
        return undefined;
    }
    async getAll(): Promise<MoviesEntity[]> {
        return this.repository.find();
    }
    async getOne({ id }: MoviesParamsDTO): Promise<MoviesEntity> {
        return undefined;
    }
    async update({ id }: MoviesParamsDTO, data: MoviesPATCHBodyDTO): Promise<MoviesEntity> {
        return undefined;
    }
    async delete({ id }: MoviesParamsDTO) {
        return undefined;
    }
}
