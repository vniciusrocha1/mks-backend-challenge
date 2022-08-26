import { MiddlewareConsumer, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from 'src/controllers/users.controller';
import { UsersEntity } from 'src/entities/users.entity';
import { UsersMiddleware } from 'src/middlewares/users.middleware';
import { UsersService } from 'src/services/users.service';
@Module({
    imports: [TypeOrmModule.forFeature([UsersEntity])],
    providers: [UsersService],
    controllers: [UsersController],
})
export class UsersModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(UsersMiddleware).forRoutes(UsersController);
    }
}
