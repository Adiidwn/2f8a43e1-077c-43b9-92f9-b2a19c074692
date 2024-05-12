import { Body, Controller, Get, Post, Query, Req } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Request } from 'express';
import { QueryParams } from 'src/dto/request.dto';
import { CrudService } from './crud.service';
import { updateDataDto } from 'src/dto/about.dto';

@ApiTags('cruds')
@Controller('cruds')
export class CrudController {
  constructor(private readonly crudService: CrudService) {}

  @ApiOperation({ summary: '' })
  @Post()
  async create(@Body() aboutDto: updateDataDto) {
    try {
      return await this.crudService.create(aboutDto);
    } catch (error) {
      throw error;
    }
  }

  @ApiOperation({ summary: '' })
  @Get()
  async getAllData(@Query() params: QueryParams, @Req() req: Request) {
    return await this.crudService.getData(params, req);
  }

  @ApiOperation({ summary: 'update' })
  @Post('update')
  async update(@Body() dto: updateDataDto, @Query() params: QueryParams) {
    try {
      return await this.crudService.update(dto, params);
    } catch (error) {
      throw error;
    }
  }
}
