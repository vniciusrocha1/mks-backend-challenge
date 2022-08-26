import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MoviesModule } from 'src/modules/movies.module';
import { UsersModule } from 'src/modules/users.module';
import { TypeOrmConfig } from './configs/typeorm.config';
@Module({
    imports: [MoviesModule, UsersModule, TypeOrmModule.forRoot(TypeOrmConfig)],
})
export class AppModule {}
