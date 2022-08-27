import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { IResponseMessage } from 'src/interfaces';
import { FindMovieIdDto, UpdateMovieDto, CreateMovieDto } from 'src/dtos/movies.dto';
import { MoviesEntity } from 'src/entities/movies.entity';
import { MoviesService } from 'src/services/movies.service';
import { ApiTags } from '@nestjs/swagger';
@Controller('movies')
@ApiTags('/movies')
export class MoviesController {
    constructor(private readonly service: MoviesService) {}
    @Post()
    async create(@Body() body: CreateMovieDto): Promise<{ data: MoviesEntity }> {
        const data = await this.service.save(body);
        return { data };
    }
    @Get()
    async show(): Promise<{ data: MoviesEntity[] }> {
        const data = await this.service.getAll();
        return { data };
    }
    @Get(':id')
    async index(@Param() params: FindMovieIdDto): Promise<{ data: MoviesEntity }> {
        const data = await this.service.getOne(params);
        return { data };
    }
    @Patch(':id')
    async update(@Param() params: FindMovieIdDto, @Body() body: UpdateMovieDto): Promise<{ data: MoviesEntity }> {
        const data = await this.service.update(params, body);
        return { data };
    }
    @Delete(':id')
    async delete(@Param() params: FindMovieIdDto): Promise<IResponseMessage> {
        return this.service.delete(params);
    }
}
