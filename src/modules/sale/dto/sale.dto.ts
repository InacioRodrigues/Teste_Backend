import { IsNotEmpty, IsString, IsNumber, IsDate } from 'class-validator';
import { Transform } from 'class-transformer';

export class SaleDto {
    @IsNotEmpty({ message: 'O campo total não pode estar vazio' })
    @IsNumber({}, { message: 'O campo total deve ser um número' })
    total: number;
  
    @IsNotEmpty({ message: 'O campo clientId não pode estar vazio' })
    @IsString({ message: 'O campo clientId deve ser uma string' })
    clientId: string;

    date: number;
}
 