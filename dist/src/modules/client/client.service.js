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
exports.ClientService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../database/prisma.service");
let ClientService = class ClientService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(data) {
        try {
            const { name, email } = data;
            const existClient = await this.prisma.client.findUnique({
                where: {
                    email: email
                }
            });
            if (existClient) {
                throw new Error('Já existe client com esse email');
            }
            const client = await this.prisma.client.create({
                data: {
                    name,
                    email
                },
            });
            return client;
        }
        catch (error) {
            throw new common_1.BadRequestException(`Falha ao criar client`);
        }
    }
    async findOne(id) {
        const client = await this.prisma.client.findUnique({ where: { id } });
        if (!client) {
            throw new common_1.NotFoundException(`Cliente com ID ${id} não encontrado`);
        }
        return client;
    }
    async remove(id) {
        try {
            const clientDeletada = await this.prisma.client.delete({
                where: { id },
            });
            return clientDeletada;
        }
        catch (error) {
            throw new common_1.NotFoundException(`client com ID ${id} não encontrada`);
        }
    }
    async delete(id) {
        try {
            const deletedclient = await this.prisma.client.delete({
                where: { id },
            });
            return deletedclient;
        }
        catch (error) {
            throw new common_1.NotFoundException(`client com ID ${id} não encontrada`);
        }
    }
    async update(id, data) {
        try {
            const { name, email } = data;
            const updateclient = await this.prisma.client.update({
                where: { id },
                data: {
                    name,
                    email,
                },
            });
            return updateclient;
        }
        catch (error) {
            throw new error(`Falha ao atualizar client com ID ${id}`);
        }
    }
    async findAll() {
        try {
            const client = await this.prisma.client.findMany();
            return client;
        }
        catch (error) {
            throw new error('Falha ao obter client');
        }
    }
};
exports.ClientService = ClientService;
exports.ClientService = ClientService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ClientService);
//# sourceMappingURL=client.service.js.map