import { MiddlewareConsumer, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthController } from 'src/controllers/auth.controller';
import { UsersEntity } from 'src/entities/users.entity';
import { AuthMiddleware } from 'src/middlewares/auth.middleware';
import { AuthService } from 'src/services/auth.service';
@Module({
    imports: [TypeOrmModule.forFeature([UsersEntity])],
    providers: [AuthService],
    controllers: [AuthController],
})
export class AuthModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(AuthMiddleware).forRoutes(AuthController);
    }
}
