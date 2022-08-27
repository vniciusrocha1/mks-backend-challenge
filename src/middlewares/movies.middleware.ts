import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { MoviesRepositories } from '.';
@Injectable()
export class MoviesMiddleware extends MoviesRepositories implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
        this.__init__(req, res, next);
        return this.validatingRequest();
    }
    private async validatingRequest() {
        if (!!this.uuid) {
            //? Validating the id sent in the request
            let data = await this.repository.findOne({ where: { id: this.uuid } });
            if (!!!data)
                return this.throwError([`id:'${this.uuid}' was not found in '/${this.endpoint}' endpoint!`], 404);
        }
        return this.next();
    }
}
