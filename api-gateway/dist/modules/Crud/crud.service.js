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
const axios_1 = require("@nestjs/axios");
const common_1 = require("@nestjs/common");
const rxjs_1 = require("rxjs");
let CrudService = class CrudService {
    constructor(httpService) {
        this.httpService = httpService;
    }
    async create(aboutDto) {
        try {
            const data = this.httpService
                .post(`${process.env.SVC_DB_CRUD}/api/v1/cruds`, aboutDto)
                .pipe((0, rxjs_1.map)((response) => response.data), (0, rxjs_1.catchError)((e) => {
                throw new common_1.HttpException(`${e.response.statusText} : ${e.response.data?.errorMessage}`, e.response.status);
            }))
                .toPromise();
            return data;
        }
        catch (error) {
            throw new common_1.HttpException(`${error.response.statusText} : ${error.response.data?.errorMessage}`, error.response.status);
        }
    }
    async getData(params, req) {
        try {
            const token = req.headers.authorization?.split(' ')[1];
            const data = this.httpService
                .get(`${process.env.SVC_DB_CRUD}/api/v1/cruds`, {
                params,
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
                .pipe((0, rxjs_1.map)((response) => response.data), (0, rxjs_1.catchError)((e) => {
                throw new common_1.HttpException(`${e.response.statusText} : ${e.response.data?.errorMessage}`, e.response.status);
            }))
                .toPromise();
            return data;
        }
        catch (error) {
            throw new common_1.HttpException(`${error.response.statusText} : ${error.response.data?.errorMessage}`, error.response.status);
        }
    }
    async update(dto, params) {
        try {
            const data = this.httpService
                .post(`${process.env.SVC_DB_CRUD}/api/v1/cruds/update`, dto, {
                params,
            })
                .pipe((0, rxjs_1.map)((response) => response.data), (0, rxjs_1.catchError)((e) => {
                throw new common_1.HttpException(`${e.response.statusText} : ${e.response.data?.errorMessage}`, e.response.status);
            }))
                .toPromise();
            return data;
        }
        catch (error) {
            throw new common_1.HttpException(`${error.response.statusText} : ${error.response.data?.errorMessage}`, error.response.status);
        }
    }
};
exports.CrudService = CrudService;
exports.CrudService = CrudService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [axios_1.HttpService])
], CrudService);
//# sourceMappingURL=crud.service.js.map