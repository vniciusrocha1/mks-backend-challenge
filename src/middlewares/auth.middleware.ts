import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { UsersRepositories } from '.';
import { compareSync } from 'bcryptjs';
@Injectable()
export class AuthMiddleware extends UsersRepositories implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
        this.__init__(req, res, next);
        return this.validateCredentials();
    }
    private async validateCredentials() {
        const {
            body: { email, password },
        } = this.req;
        if (!!email && !!password) {
            try {
                let user = await this.repository.findOne({ where: { email } });
                let authorizate = compareSync(password, user?.password as string);
                if (!authorizate) throw new Error();
            } catch {
                return this.throwError([`wrong email or password!`], 401);
            }
        }
        return this.next();
    }
}
