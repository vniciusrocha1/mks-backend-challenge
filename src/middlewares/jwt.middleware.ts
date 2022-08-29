import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { UsersRepositories, __ConfigsMiddleware } from '.';
import { verify } from 'jsonwebtoken';
@Injectable()
export class JwtMiddleware extends __ConfigsMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
        this.__init__(req, res, next);
        return this.validateToken();
    }
    private async validateToken() {
        if (!(this.endpoint === 'users' && !!this.method['post'])) {
            const {
                headers: { authorization },
            } = this.req;
            if (!!authorization) {
                try {
                    const token = !!authorization?.split(' ')[1]
                        ? (authorization?.split(' ')[1] as string)
                        : (authorization as string);
                    verify(
                        token,
                        process.env?.SECRET_KEY?.toString() || 'P1n3@8l&s@r3s08Ad',
                        async (_: any, decoded: any) => {
                            if (!!!decoded) throw new Error();
                        },
                    );
                } catch {
                    return this.throwError([`invalid token!!`], 406);
                }
            } else {
                return this.throwError(['token is missing!'], 401);
            }
        }
        return this.next();
    }
}
