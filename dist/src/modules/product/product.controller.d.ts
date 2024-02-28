import { ProductService } from './product.service';
import { ProductDto } from './dto/product.dto';
export declare class ProductController {
    private readonly productService;
    constructor(productService: ProductService);
    create(ProductDto: ProductDto): Promise<{
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
    findOne(id: string): Promise<{
        id: string;
        name: string;
        price: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    update(id: string, ProductDto: ProductDto): Promise<{
        id: string;
        name: string;
        price: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    remove(id: string): Promise<{
        message: string;
        deletedProduct: {
            id: string;
            name: string;
            price: number;
            createdAt: Date;
            updatedAt: Date;
        };
    }>;
}
