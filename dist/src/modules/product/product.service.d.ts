import { ProductDto } from './dto/product.dto';
import { PrismaService } from 'src/database/prisma.service';
export declare class ProductService {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: ProductDto): Promise<{
        id: string;
        name: string;
        price: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findOne(id: string): Promise<{
        id: string;
        name: string;
        price: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    remove(id: string): Promise<{
        id: string;
        name: string;
        price: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    delete(id: string): Promise<{
        id: string;
        name: string;
        price: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    update(id: string, data: ProductDto): Promise<{
        id: string;
        name: string;
        price: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findAll(): Promise<{
        id: string;
        name: string;
        price: number;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
}
