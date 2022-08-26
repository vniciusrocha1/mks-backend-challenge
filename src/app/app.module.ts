import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MoviesModule } from 'src/modules/movies.module';
import { TypeOrmConfig } from './configs/typeorm.config';
@Module({
    imports: [MoviesModule, TypeOrmModule.forRoot(TypeOrmConfig)],
})
export class AppModule {}
