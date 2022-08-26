import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { ConfigsMiddleware } from '.';
@Injectable()
export class validateIDsMiddleware extends ConfigsMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
        this.__init__(req, res, next);
        return this.validateIDs();
    }
    private async validateIDs() {
        if (!!this.uuid) {
            let data = await this.repository.findOne({ where: { id: this.uuid } });
            console.log('data ', data);
            if (!!!data) {
                return this.throwError([`id:'${this.uuid}' was not found in '/${this.endpoint}' endpoint!`]);
            }
        }
        return this.next();
    }
}
