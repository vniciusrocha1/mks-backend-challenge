import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import 'dotenv/config';
export const TypeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  host: process.env.POSTGRES_HOST,
  port: Number(process.env.POSTGRES_PORT),
  database: process.env.POSTGRES_DB,
  synchronize: !!process.env.POSTGRES_SYNCHRONIZE
    ? Boolean(process.env.POSTGRES_SYNCHRONIZE)
    : false,
  entities: ['dist/**/*.entity.js'],
};
