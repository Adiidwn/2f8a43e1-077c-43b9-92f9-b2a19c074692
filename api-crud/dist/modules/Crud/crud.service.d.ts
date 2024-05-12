import { updateDataDto } from 'src/dto/about.dto';
import { QueryParams } from 'src/dto/request.dto';
import { PrismaService } from 'src/prisma.service';
export declare class CrudService {
    private prisma;
    constructor(prisma: PrismaService);
    create(aboutDto: updateDataDto): Promise<{
        id: string;
        first_name: string;
        last_name: string;
        position: string;
        phone_number: string;
        email: string;
        ceatedAt: Date;
    }>;
    getData(params: QueryParams): Promise<{
        total_data: number;
        data: {
            first_name: string;
            last_name: string;
            position: string;
            phone_number: string;
            email: string;
        }[];
    }>;
    update(aboutDto: updateDataDto, params: QueryParams): Promise<{
        updateData: {
            first_name: string;
            last_name: string;
            position: string;
            phone_number: string;
            email: string;
        };
        updateCount: import(".prisma/client").Prisma.BatchPayload;
    }>;
}
