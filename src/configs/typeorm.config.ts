import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import 'dotenv/config';
export const TypeOrmConfig: TypeOrmModuleOptions = {
    type: 'postgres',
    url: process.env?.DATABASE_URL,
    synchronize: process.env?.NODE_ENV == 'development' ? true : Boolean(process.env?.DATABASE_SYNC),
    ssl: process.env?.NODE_ENV == 'development' ? false : { rejectUnauthorized: false },
    entities: ['dist/**/*.entity.js'],
};
