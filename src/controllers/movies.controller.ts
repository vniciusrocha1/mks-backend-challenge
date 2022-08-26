import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { MoviesEntity } from 'src/entities/movies.entity';
import { MoviesService } from 'src/services/movies.service';
@Controller('movies')
export class MoviesController {
    constructor(private readonly service: MoviesService) {}
    @Post()
    async create(@Body() body): Promise<{ data: MoviesEntity }> {
        const movie = await this.service.save(body);
        return { data: movie };
    }
    @Get()
    async show() {
        return await this.service.getAll();
    }
    @Get(':id')
    async index(@Param() params): Promise<{ data: MoviesEntity }> {
        const movie = await this.service.getOne(params);
        return { data: movie };
    }
    @Patch(':id')
    async update(@Param() params, @Body() body): Promise<{ data: MoviesEntity }> {
        const movie = await this.service.update(params, body);
        return { data: movie };
    }
    @Delete(':id')
    async delete(@Param() params) {
        return await this.service.delete(params);
    }
}
