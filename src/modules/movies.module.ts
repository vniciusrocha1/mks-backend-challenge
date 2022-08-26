import { Module } from '@nestjs/common';
import { MoviesController } from 'src/controllers/movies.controller';
import { MoviesEntity } from 'src/entities/movies.entity';
@Module({
  imports: [MoviesEntity],
  controllers: [MoviesController],
})
export class MoviesModule {}
