import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { IResponseMessage } from 'src/interfaces';
import { MoviesParamsDTO, MoviesPATCHBodyDTO, MoviesPOSTBodyDTO } from 'src/dtos/movies.dto';
import { MoviesEntity } from 'src/entities/movies.entity';
import { MoviesService } from 'src/services/movies.service';
@Controller('movies')
export class MoviesController {
    constructor(private readonly service: MoviesService) {}
    @Post()
    async create(@Body() body: MoviesPOSTBodyDTO): Promise<{ data: MoviesEntity }> {
        const movie = await this.service.save(body);
        return { data: movie };
    }
    @Get()
    async show(): Promise<{ data: MoviesEntity[] }> {
        const movies = await this.service.getAll();
        return { data: movies };
    }
    @Get(':id')
    async index(@Param() params: MoviesParamsDTO): Promise<{ data: MoviesEntity }> {
        const movie = await this.service.getOne(params);
        return { data: movie };
    }
    @Patch(':id')
    async update(@Param() params: MoviesParamsDTO, @Body() body: MoviesPATCHBodyDTO): Promise<{ data: MoviesEntity }> {
        const movie = await this.service.update(params, body);
        return { data: movie };
    }
    @Delete(':id')
    async delete(@Param() params: MoviesParamsDTO): Promise<IResponseMessage> {
        return this.service.delete(params);
    }
}
