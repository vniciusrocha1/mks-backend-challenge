import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import 'dotenv/config';
export const TypeOrmConfig: TypeOrmModuleOptions = {
    type: 'postgres',
    url: process.env.DATABASE_URL,
    synchronize: true,
    entities: ['dist/**/*.entity.js'],
    ssl: {
        rejectUnauthorized: false,
    },
};
