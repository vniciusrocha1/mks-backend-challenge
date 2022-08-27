import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { UsersRepositories } from '.';
@Injectable()
export class UsersMiddleware extends UsersRepositories implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
        this.__init__(req, res, next);
        return this.validatingRequest();
    }
    private async validatingRequest() {
        if (!!this.uuid) {
            //? Validating the id sent in the request
            let data = await this.repository.findOne({ where: { id: this.uuid } });
            if (!!!data) return this.throwError([`id:'${this.uuid}' was not found in '/${this.endpoint}' endpoint!`]);
        } else if (!!this.body) {
            //? Validating the unique fields sent in the request
            let alerts = await this.__validateUniqueFields(['cpf', 'email']);
            if (alerts.length > 0) return this.throwError(alerts);
        }
        return this.next();
    }
    private async __validateUniqueFields(uniqueList: string[]): Promise<string[]> {
        let messages: string[] = [];
        for (const field in this.body) {
            if (uniqueList.includes(field.toLocaleLowerCase())) {
                let where = field === 'cpf' ? { cpf: this.body[field] } : { email: this.body[field] };
                let data = await this.repository.findOne({ where });
                !!data && messages.push(`${field} already exists!`);
            }
        }
        return messages;
    }
}
