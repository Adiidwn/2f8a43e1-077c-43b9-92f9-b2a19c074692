import { HttpService } from '@nestjs/axios';
import { Request } from 'express';
export declare class CrudService {
    private httpService;
    constructor(httpService: HttpService);
    create(aboutDto: any): Promise<any>;
    getData(params: any, req: Request): Promise<any>;
    update(dto: any, params: any): Promise<any>;
}
