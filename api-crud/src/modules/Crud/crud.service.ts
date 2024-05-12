import { HttpStatus, Injectable } from '@nestjs/common';
import { updateDataDto } from 'src/dto/about.dto';
import { QueryParams } from 'src/dto/request.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class CrudService {
  constructor(private prisma: PrismaService) {}

  async create(aboutDto: updateDataDto) {
    const findEmail = await this.prisma.crud.findFirst({
      where: {
        email: aboutDto.email,
      },
    });
    if (findEmail) {
      throw (HttpStatus.BAD_REQUEST, 'Email already exists');
    }

    const create = await this.prisma.crud.create({
      data: {
        first_name: aboutDto.first_name,
        last_name: aboutDto.last_name,
        position: aboutDto.position,
        phone_number: aboutDto.phone_number,
        email: aboutDto.email,
      },
    });
    return create;
  }

  async getData(params: QueryParams) {
    const skip = params.per_page * (params.page - 1);
    const take = params.per_page;

    let arrQuery = [];
    if (params.keyword) {
      arrQuery.push({
        email: {
          contains: params.keyword,
        },
      });
    }

    const [total_data, data] = await this.prisma.$transaction([
      this.prisma.crud.count({
        where: {
          AND: arrQuery,
        },
      }),
      this.prisma.crud.findMany({
        where: {
          AND: arrQuery,
        },
        select: {
          first_name: true,
          last_name: true,
          position: true,
          phone_number: true,
          email: true,
        },
        take,
        orderBy: {
          ceatedAt: 'desc',
        },
      }),
    ]);

    return {
      total_data,
      data,
    };
  }

  async update(aboutDto: updateDataDto, params: QueryParams) {
    console.log('params', params.ids);

    let arrQuery: any = {};
    if (params.ids) {
      const listId = params.ids.split(',');
      arrQuery = {
        id: {
          in: listId,
        },
      };
    }

    const updateCount = await this.prisma.crud.updateMany({
      where: {
        AND: arrQuery,
      },
      data: {
        first_name: aboutDto.first_name,
        last_name: aboutDto.last_name,
        position: aboutDto.position,
        phone_number: aboutDto.phone_number,
        email: aboutDto.email,
      },
    });
    const updateData = {
      first_name: aboutDto.first_name,
      last_name: aboutDto.last_name,
      position: aboutDto.position,
      phone_number: aboutDto.phone_number,
      email: aboutDto.email,
    };

    return {
      updateData,
      updateCount,
    };
  }
}
