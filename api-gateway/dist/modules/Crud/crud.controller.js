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
const swagger_1 = require("@nestjs/swagger");
const request_dto_1 = require("../../dto/request.dto");
const crud_service_1 = require("./crud.service");
const about_dto_1 = require("../../dto/about.dto");
let CrudController = class CrudController {
    constructor(crudService) {
        this.crudService = crudService;
    }
    async create(aboutDto) {
        try {
            return await this.crudService.create(aboutDto);
        }
        catch (error) {
            throw error;
        }
    }
    async getAllData(params, req) {
        return await this.crudService.getData(params, req);
    }
    async update(dto, params) {
        try {
            return await this.crudService.update(dto, params);
        }
        catch (error) {
            throw error;
        }
    }
};
exports.CrudController = CrudController;
__decorate([
    (0, swagger_1.ApiOperation)({ summary: '' }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [about_dto_1.updateDataDto]),
    __metadata("design:returntype", Promise)
], CrudController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: '' }),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [request_dto_1.QueryParams, Object]),
    __metadata("design:returntype", Promise)
], CrudController.prototype, "getAllData", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'update' }),
    (0, common_1.Post)('update'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [about_dto_1.updateDataDto, request_dto_1.QueryParams]),
    __metadata("design:returntype", Promise)
], CrudController.prototype, "update", null);
exports.CrudController = CrudController = __decorate([
    (0, swagger_1.ApiTags)('cruds'),
    (0, common_1.Controller)('cruds'),
    __metadata("design:paramtypes", [crud_service_1.CrudService])
], CrudController);
//# sourceMappingURL=crud.controller.js.map