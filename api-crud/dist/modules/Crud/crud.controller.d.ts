import { HttpStatus } from '@nestjs/common';
import { QueryParams } from 'src/dto/request.dto';
import { CrudService } from './crud.service';
import { updateDataDto } from 'src/dto/about.dto';
export declare class CrudController {
    private readonly crudService;
    constructor(crudService: CrudService);
    create(aboutDto: updateDataDto): Promise<{
        create: {
            id: string;
            first_name: string;
            last_name: string;
            position: string;
            phone_number: string;
            email: string;
            ceatedAt: Date;
        };
        _meta: {
            code: HttpStatus;
            status: string;
            message: string;
        };
    }>;
    getData(params: QueryParams): Promise<{
        data: {
            first_name: string;
            last_name: string;
            position: string;
            phone_number: string;
            email: string;
        }[];
        metadata: {
            total_count: number;
            page_count: number;
            page: number;
            per_page: number;
            sort: import("src/utils/response.constant").SortOrder;
            order_by: string;
            keyword: string;
        };
        _meta: {
            code: HttpStatus;
            status: string;
            message: string;
        };
    }>;
    updateData(dto: updateDataDto, params: QueryParams): Promise<{
        data: {
            updateData: {
                first_name: string;
                last_name: string;
                position: string;
                phone_number: string;
                email: string;
            };
            updateCount: import(".prisma/client").Prisma.BatchPayload;
        };
        _meta: {
            code: HttpStatus;
            status: string;
            message: string;
        };
    }>;
}
