import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { IResponseMessage } from 'src/interfaces';
import { UsersParamsDTO, UsersPATCHBodyDTO, UsersPOSTBodyDTO } from 'src/dtos/users.dto';
import { UsersEntity } from 'src/entities/users.entity';
import { UsersService } from 'src/services/users.service';
@Controller('users')
export class UsersController {
    constructor(private readonly service: UsersService) {}
    @Post()
    async create(@Body() body: UsersPOSTBodyDTO): Promise<{ data: UsersEntity }> {
        const data = await this.service.save(body);
        return { data };
    }
    @Get()
    async show(): Promise<{ data: UsersEntity[] }> {
        const data = await this.service.getAll();
        return { data };
    }
    @Get(':id')
    async index(@Param() params: UsersParamsDTO): Promise<{ data: UsersEntity }> {
        const data = await this.service.getOne(params);
        return { data };
    }
    @Patch(':id')
    async update(@Param() params: UsersParamsDTO, @Body() body: UsersPATCHBodyDTO): Promise<{ data: UsersEntity }> {
        const data = await this.service.update(params, body);
        return { data };
    }
    @Delete(':id')
    async delete(@Param() params: UsersParamsDTO): Promise<IResponseMessage> {
        return this.service.delete(params);
    }
}
