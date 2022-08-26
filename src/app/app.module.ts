import { Module } from '@nestjs/common';
import { MoviesModule } from 'src/modules/movies.module';
@Module({
  imports: [MoviesModule],
})
export class AppModule {}
