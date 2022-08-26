import { Controller, Delete, Get, Patch, Post } from '@nestjs/common';
@Controller('movies')
export class MoviesController {
  @Post()
  public create() {
    return { data: 'create!!' };
  }
  @Get()
  public show() {
    return { data: 'show!!' };
  }
  @Get(':id')
  public index() {
    return { data: 'index!!' };
  }
  @Patch(':id')
  public update() {
    return { data: 'update!!' };
  }
  @Delete(':id')
  public delete() {
    return { data: 'delete!!' };
  }
}
