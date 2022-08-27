import { NextFunction, Request, Response } from 'express';
import { InjectRepository } from '@nestjs/typeorm';
import { MoviesEntity } from 'src/entities/movies.entity';
import { Repository } from 'typeorm';
import { UsersEntity } from 'src/entities/users.entity';
const validate = require('uuid-validate');
export class __ConfigsMiddleware {
    public endpoint: string;
    public method: string;
    public body: any;
    public uuid: string;
    public req: Request;
    public res: Response;
    public next: NextFunction;
    public __init__(req: Request, res: Response, next: NextFunction) {
        this.req = req;
        this.res = res;
        this.next = next;
        this._getUuid();
        this._getEndpoint();
        this._getMethod();
        this._getBody();
    }
    private _getUuid() {
        const {
            params: { id },
            baseUrl,
        } = this.req;
        let splited_url = baseUrl.split('/');
        let uuid = !!!id ? splited_url[splited_url.length - 1] : id;
        this.uuid = validate(uuid) ? uuid : undefined;
    }
    private _getEndpoint() {
        const {
            route: { path },
            baseUrl,
        } = this.req;
        let splited_url = !!baseUrl ? baseUrl.split('/') : path.split('/');
        let last_value = splited_url[splited_url.length - 1];
        let index =
            validate(last_value) || last_value === ':id' || last_value === ''
                ? splited_url.length - 2
                : splited_url.length - 1;
        this.endpoint = splited_url[index];
    }
    private _getMethod() {
        const {
            route: { methods },
        } = this.req;
        this.method = methods;
    }
    private _getBody() {
        const { body } = this.req;
        this.body = body;
    }
    public throwError(message: any, status: number = 400) {
        let errorsList = {
            400: 'Bad Request',
            401: 'Unauthorized',
            404: 'Not Found',
            406: 'Not Acceptable',
        };
        return this.res.status(status).json({
            statusCode: status,
            message: message,
            error: errorsList[status],
        });
    }
}
export class MoviesRepositories extends __ConfigsMiddleware {
    @InjectRepository(MoviesEntity)
    public repository: Repository<MoviesEntity>;
}
export class UsersRepositories extends __ConfigsMiddleware {
    @InjectRepository(UsersEntity)
    public repository: Repository<UsersEntity>;
}
