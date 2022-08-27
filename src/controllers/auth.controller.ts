import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthenticateLoginDto } from 'src/dtos/auth.dto';
import { UsersEntity } from 'src/entities/users.entity';
import { AuthService } from 'src/services/auth.service';
@Controller('login')
@ApiTags('/login')
export class AuthController {
    constructor(private readonly service: AuthService) {}
    @Post()
    async login(@Body() body: AuthenticateLoginDto): Promise<{ token: string; data: UsersEntity }> {
        return await this.service.login(body);
    }
}
