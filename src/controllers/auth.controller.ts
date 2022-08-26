import { Body, Controller, Post } from '@nestjs/common';
import { AuthPOSTBodyDTO } from 'src/dtos/auth.dto';
import { UsersEntity } from 'src/entities/users.entity';
import { AuthService } from 'src/services/auth.service';
@Controller('login')
export class AuthController {
    constructor(private readonly service: AuthService) {}
    @Post()
    async login(@Body() body: AuthPOSTBodyDTO): Promise<{ token: string; data: UsersEntity }> {
        return await this.service.login(body);
    }
}
