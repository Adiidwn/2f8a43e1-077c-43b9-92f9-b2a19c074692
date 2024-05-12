import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Post,
  Query,
  Req,
} from '@nestjs/common';
import { QueryParams } from 'src/dto/request.dto';
import { SUCCESS_STATUS } from 'src/utils/response.constant';
import { CrudService } from './crud.service';
import { updateDataDto } from 'src/dto/about.dto';

@Controller('cruds')
export class CrudController {
  constructor(private readonly crudService: CrudService) {}

  @Post()
  async create(@Body() aboutDto: updateDataDto) {
    try {
      const create = await this.crudService.create(aboutDto);
      return {
        create,
        _meta: {
          code: HttpStatus.OK,
          status: SUCCESS_STATUS,
          message: 'success create data ',
        },
      };
    } catch (error) {
      throw error;
    }
  }

  @Get()
  async getData(@Query() params: QueryParams) {
    try {
      const { total_data, data } = await this.crudService.getData(params);
      const meta_data = {
        total_count: total_data,
        page_count: Math.ceil(total_data / (params.per_page ?? 10)),
        page: params.page,
        per_page: params.per_page ?? 10,
        sort: params.sort,
        order_by: params.order_by,
        keyword: params.keyword,
      };
      return {
        data: data,
        metadata: meta_data ? meta_data : null,
        _meta: {
          code: HttpStatus.OK,
          status: SUCCESS_STATUS,
          message: 'success get data',
        },
      };
    } catch (error) {
      throw error;
    }
  }

  @Post('update')
  async updateData(@Body() dto: updateDataDto, @Query() params: QueryParams) {
    try {
      console.log('dto', dto);

      const data = await this.crudService.update(dto, params);
      console.log('data', data);

      return {
        data: data,
        _meta: {
          code: HttpStatus.OK,
          status: SUCCESS_STATUS,
          message: 'success update data',
        },
      };
    } catch (error) {
      throw error;
    }
  }
}
