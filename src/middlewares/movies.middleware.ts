import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { MoviesRepositories } from '.';
const util = require('util');
@Injectable()
export class MoviesMiddleware extends MoviesRepositories implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
        this.__init__(req, res, next);
        return this.validateIDs();
    }
    private async validateIDs() {
        if (!!this.uuid) {
            let data = await this.repository.findOne({ where: { id: this.uuid } });
            if (!!!data) {
                return this.throwError([`id:'${this.uuid}' was not found in '/${this.endpoint}' endpoint!`]);
            }
        }
        return this.next();
    }
}
