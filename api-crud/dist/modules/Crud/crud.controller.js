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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CrudController = void 0;
const common_1 = require("@nestjs/common");
const request_dto_1 = require("../../dto/request.dto");
const response_constant_1 = require("../../utils/response.constant");
const crud_service_1 = require("./crud.service");
const about_dto_1 = require("../../dto/about.dto");
let CrudController = class CrudController {
    constructor(crudService) {
        this.crudService = crudService;
    }
    async create(aboutDto) {
        try {
            const create = await this.crudService.create(aboutDto);
            return {
                create,
                _meta: {
                    code: common_1.HttpStatus.OK,
                    status: response_constant_1.SUCCESS_STATUS,
                    message: 'success create data ',
                },
            };
        }
        catch (error) {
            throw error;
        }
    }
    async getData(params) {
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
                    code: common_1.HttpStatus.OK,
                    status: response_constant_1.SUCCESS_STATUS,
                    message: 'success get data',
                },
            };
        }
        catch (error) {
            throw error;
        }
    }
    async updateData(dto, params) {
        try {
            console.log('dto', dto);
            const data = await this.crudService.update(dto, params);
            console.log('data', data);
            return {
                data: data,
                _meta: {
                    code: common_1.HttpStatus.OK,
                    status: response_constant_1.SUCCESS_STATUS,
                    message: 'success update data',
                },
            };
        }
        catch (error) {
            throw error;
        }
    }
};
exports.CrudController = CrudController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [about_dto_1.updateDataDto]),
    __metadata("design:returntype", Promise)
], CrudController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [request_dto_1.QueryParams]),
    __metadata("design:returntype", Promise)
], CrudController.prototype, "getData", null);
__decorate([
    (0, common_1.Post)('update'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [about_dto_1.updateDataDto, request_dto_1.QueryParams]),
    __metadata("design:returntype", Promise)
], CrudController.prototype, "updateData", null);
exports.CrudController = CrudController = __decorate([
    (0, common_1.Controller)('cruds'),
    __metadata("design:paramtypes", [crud_service_1.CrudService])
], CrudController);
//# sourceMappingURL=crud.controller.js.map