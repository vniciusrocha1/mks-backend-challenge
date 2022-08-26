import { Controller, Delete, Get, Patch, Post } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MoviesEntity } from 'src/entities/movies.entity';
import { Repository } from 'typeorm';
@Controller('movies')
export class MoviesController {
  constructor(
    @InjectRepository(MoviesEntity)
    private repository: Repository<MoviesEntity>,
  ) {}
  @Post()
  public async create() {
    return { data: 'create!!' };
  }
  @Get()
  public async show(): Promise<MoviesEntity[]> {
    return await this.repository.find();
  }
  @Get(':id')
  public async index() {
    return { data: 'index!!' };
  }
  @Patch(':id')
  public async update() {
    return { data: 'update!!' };
  }
  @Delete(':id')
  public async delete() {
    return { data: 'delete!!' };
  }
}
