import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import 'dotenv/config';
export const TypeOrmConfig: TypeOrmModuleOptions = {
    type: 'postgres',
    url: process.env.DATABASE_URL,
    synchronize: !!process.env.POSTGRES_SYNCHRONIZE ? Boolean(process.env.POSTGRES_SYNCHRONIZE) : false,
    entities: ['dist/**/*.entity.js'],
};
