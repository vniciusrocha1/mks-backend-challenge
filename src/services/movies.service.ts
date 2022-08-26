import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MoviesEntity } from 'src/entities/movies.entity';
import { Repository } from 'typeorm';
@Injectable()
export class MoviesService {
    constructor(
        @InjectRepository(MoviesEntity)
        private repository: Repository<MoviesEntity>,
    ) {}
    async save(body) {
        return undefined;
    }
    async getAll() {
        return undefined;
    }
    async getOne(params) {
        return undefined;
    }
    async update(params, body) {
        return undefined;
    }
    async delete(params) {
        return undefined;
    }
}
