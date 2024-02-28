import { IsNotEmpty, IsNumber, IsString, Min } from "class-validator";

export class ProductDto {
    @IsNotEmpty({ message: 'O preço não pode estar vazio' })
    @IsNumber({}, { message: 'O preço deve ser um número' })
    @Min(0, { message: 'O preço não pode ser negativo' })
    price: number;

    @IsString({ message: 'O campo name deve ser uma string' })
    @IsNotEmpty({ message: 'O campo name não pode estar vazio' })
    name: string;
}
