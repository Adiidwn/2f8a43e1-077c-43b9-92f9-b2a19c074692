"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CrudModule = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("@nestjs/axios");
const crud_service_1 = require("./crud.service");
const crud_controller_1 = require("./crud.controller");
let CrudModule = class CrudModule {
};
exports.CrudModule = CrudModule;
exports.CrudModule = CrudModule = __decorate([
    (0, common_1.Module)({
        imports: [axios_1.HttpModule],
        controllers: [crud_controller_1.CrudController],
        providers: [crud_service_1.CrudService],
        exports: [crud_service_1.CrudService],
    })
], CrudModule);
//# sourceMappingURL=crud.module.js.map