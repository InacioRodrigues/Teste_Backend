import { SaleService } from './sale.service';
import { SaleDto } from './dto/sale.dto';
export declare class SaleController {
    private readonly saleService;
    constructor(saleService: SaleService);
    create(SaleDto: SaleDto): Promise<{
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
    findOne(id: string): Promise<{
        id: string;
        total: number;
        clientId: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    update(id: string, SaleDto: SaleDto): Promise<{
        id: string;
        total: number;
        clientId: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    remove(id: string): Promise<{
        message: string;
        deletedsale: {
            id: string;
            total: number;
            clientId: string;
            createdAt: Date;
            updatedAt: Date;
        };
    }>;
}
