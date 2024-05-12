import { Request } from 'express';
import { QueryParams } from 'src/dto/request.dto';
import { CrudService } from './crud.service';
import { updateDataDto } from 'src/dto/about.dto';
export declare class CrudController {
    private readonly crudService;
    constructor(crudService: CrudService);
    create(aboutDto: updateDataDto): Promise<any>;
    getAllData(params: QueryParams, req: Request): Promise<any>;
    update(dto: updateDataDto, params: QueryParams): Promise<any>;
}
