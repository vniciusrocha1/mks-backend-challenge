import { NextFunction, Request, Response } from 'express';
import { InjectRepository } from '@nestjs/typeorm';
import { MoviesEntity } from 'src/entities/movies.entity';
import { Repository } from 'typeorm';
import { UsersEntity } from 'src/entities/users.entity';
const validate = require('uuid-validate');
class __repositoriesMiddleware {
    // @InjectRepository(UsersEntity)
    // public usersRepository: Repository<UsersEntity>;
    @InjectRepository(MoviesEntity)
    public moviesRepository: Repository<MoviesEntity>;
}
export class ConfigsMiddleware extends __repositoriesMiddleware {
    public repository = undefined;
    public endpoint: string = undefined;
    public uuid: string = undefined;
    public req: Request = undefined;
    public res: Response = undefined;
    public next: NextFunction = undefined;
    public __init__(req: Request, res: Response, next: NextFunction) {
        this.req = req;
        this.res = res;
        this.next = next;
        this._getUuid();
        this._getEndpoint();
        this._getRepository();
    }
    private _getRepository() {
        let repository = this.endpoint === 'movies' ? this.moviesRepository : this.endpoint;
        // repository = repository === 'users' ? this.usersRepository : repository;
        this.repository = repository;
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
            params: { id },
            baseUrl,
        } = this.req;
        let splited_url = baseUrl.split('/');
        let index = validate(splited_url[splited_url.length - 1]) ? splited_url.length - 2 : splited_url.length - 1;
        this.endpoint = splited_url[index];
    }
    public throwError(message: any) {
        return this.res.status(400).json({
            statusCode: 400,
            message: message,
            error: 'Bad Request',
        });
    }
}
