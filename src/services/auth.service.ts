import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersEntity } from 'src/entities/users.entity';
import { Repository } from 'typeorm';
import { AuthPOSTBodyDTO } from 'src/dtos/auth.dto';
import { sign } from 'jsonwebtoken';
@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(UsersEntity)
        private repository: Repository<UsersEntity>,
    ) {}
    async login({ email, password }: AuthPOSTBodyDTO): Promise<{ token: string; data: UsersEntity }> {
        const data = await this.repository.findOne({ where: { email } });
        const token = sign(
            { email: email, password: password },
            process.env.SECRET_KEY.toString() || 'P1n3@8l&s@r3s08Ad',
            {
                expiresIn: '24h',
            },
        );
        return { data, token };
    }
}
