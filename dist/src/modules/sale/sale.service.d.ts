import { SaleDto } from './dto/sale.dto';
import { PrismaService } from 'src/database/prisma.service';
export declare class SaleService {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: SaleDto): Promise<{
        id: string;
        total: number;
        clientId: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findOne(id: string): Promise<{
        id: string;
        total: number;
        clientId: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    remove(id: string): Promise<{
        id: string;
        total: number;
        clientId: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    delete(id: string): Promise<{
        id: string;
        total: number;
        clientId: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    update(id: string, data: SaleDto): Promise<{
        id: string;
        total: number;
        clientId: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findAll(): Promise<{
        id: string;
        total: number;
        clientId: string;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
}
