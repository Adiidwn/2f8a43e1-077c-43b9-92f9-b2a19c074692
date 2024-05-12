"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CrudService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma.service");
let CrudService = class CrudService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(aboutDto) {
        const findEmail = await this.prisma.crud.findFirst({
            where: {
                email: aboutDto.email,
            },
        });
        if (findEmail) {
            throw (common_1.HttpStatus.BAD_REQUEST, 'Email already exists');
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
    async getData(params) {
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
    async update(aboutDto, params) {
        console.log('params', params.ids);
        let arrQuery = {};
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
};
exports.CrudService = CrudService;
exports.CrudService = CrudService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], CrudService);
//# sourceMappingURL=crud.service.js.map