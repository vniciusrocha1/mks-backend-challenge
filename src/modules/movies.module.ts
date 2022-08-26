import { Module } from '@nestjs/common';
import { MoviesController } from 'src/controllers/movies.controller';
@Module({
  imports: [],
  controllers: [MoviesController],
})
export class MoviesModule {}
