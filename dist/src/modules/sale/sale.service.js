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
exports.SaleService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../database/prisma.service");
let SaleService = class SaleService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(data) {
        try {
            const { total, clientId, } = data;
            const sale = await this.prisma.sale.create({
                data: {
                    total, clientId,
                },
            });
            return sale;
        }
        catch (error) {
            console.log(error);
            throw new Error('Falha ao criar sale');
        }
    }
    async findOne(id) {
        const sale = await this.prisma.sale.findUnique({ where: { id } });
        if (!sale) {
            throw new common_1.NotFoundException(`salee com ID ${id} não encontrado`);
        }
        return sale;
    }
    async remove(id) {
        try {
            const saleDeletada = await this.prisma.sale.delete({
                where: { id },
            });
            return saleDeletada;
        }
        catch (error) {
            throw new common_1.NotFoundException(`sale com ID ${id} não encontrada`);
        }
    }
    async delete(id) {
        try {
            const deletedsale = await this.prisma.sale.delete({
                where: { id },
            });
            return deletedsale;
        }
        catch (error) {
            throw new common_1.NotFoundException(`sale com ID ${id} não encontrada`);
        }
    }
    async update(id, data) {
        try {
            const { total, clientId } = data;
            const updatesale = await this.prisma.sale.update({
                where: { id },
                data: {
                    total, clientId,
                },
            });
            return updatesale;
        }
        catch (error) {
            throw new common_1.BadRequestException(`Falha ao atualizar sale com ID ${id}`);
        }
    }
    async findAll() {
        try {
            const sale = await this.prisma.sale.findMany();
            return sale;
        }
        catch (error) {
            throw new common_1.BadRequestException('Falha ao obter sale');
        }
    }
};
exports.SaleService = SaleService;
exports.SaleService = SaleService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], SaleService);
//# sourceMappingURL=sale.service.js.map