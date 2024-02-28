import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class ClientDto {
    @IsString({ message: 'O campo name deve ser uma string' })
    @IsNotEmpty({ message: 'O campo name não pode estar vazio' })
    name: string;

    @IsEmail(undefined, { message:'O campo name deve ser uma string' })
    @IsNotEmpty({ message: 'O campo email não pode estar vazio' })
    email: string;
}
