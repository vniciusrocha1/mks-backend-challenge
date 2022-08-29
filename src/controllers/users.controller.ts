import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { IResponseMessage } from 'src/interfaces';
import { FindUserIdDto, UpdateUserDto, CreateUserDto } from 'src/dtos/users.dto';
import { UsersEntity } from 'src/entities/users.entity';
import { UsersService } from 'src/services/users.service';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
@Controller('users')
@ApiTags('/users')
export class UsersController {
    constructor(private readonly service: UsersService) {}
    @Post()
    async create(@Body() body: CreateUserDto): Promise<{ data: UsersEntity }> {
        const data = await this.service.save(body);
        return { data };
    }
    @ApiBearerAuth()
    @Get()
    async show(): Promise<{ data: UsersEntity[] }> {
        const data = await this.service.getAll();
        return { data };
    }
    @ApiBearerAuth()
    @Get(':id')
    async index(@Param() params: FindUserIdDto): Promise<{ data: UsersEntity }> {
        const data = await this.service.getOne(params);
        return { data };
    }
    @ApiBearerAuth()
    @Patch(':id')
    async update(@Param() params: FindUserIdDto, @Body() body: UpdateUserDto): Promise<{ data: UsersEntity }> {
        const data = await this.service.update(params, body);
        return { data };
    }
    @ApiBearerAuth()
    @Delete(':id')
    async delete(@Param() params: FindUserIdDto): Promise<IResponseMessage> {
        return this.service.delete(params);
    }
}
