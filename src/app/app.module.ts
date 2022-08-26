import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/modules/auth.module';
import { MoviesModule } from 'src/modules/movies.module';
import { UsersModule } from 'src/modules/users.module';
import { TypeOrmConfig } from './configs/typeorm.config';
@Module({
    imports: [AuthModule, UsersModule, MoviesModule, TypeOrmModule.forRoot(TypeOrmConfig)],
})
export class AppModule {}
