import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersEntity } from 'src/entities/users.entity';
import { Repository } from 'typeorm';
import { hashSync } from 'bcryptjs';
import { AuthPOSTBodyDTO } from 'src/dtos/auth.dto';
@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(UsersEntity)
        private repository: Repository<UsersEntity>,
    ) {}
    async login(credentials: AuthPOSTBodyDTO): Promise<{ token: string; data: UsersEntity }> {
        let token = '';
        let data: any = {};
        return { token, data };
    }
}
