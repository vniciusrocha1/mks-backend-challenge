import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import 'dotenv/config';
export const TypeOrmConfig: TypeOrmModuleOptions = {
    type: 'postgres',
    url: process.env.DATABASE_URL,
    synchronize: Boolean(process.env.DATABASE_SYNC),
    ssl: {
        rejectUnauthorized: false,
    },
    entities: ['dist/**/*.entity.js'],
};
