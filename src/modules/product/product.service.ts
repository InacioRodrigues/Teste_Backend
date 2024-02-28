import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { ProductDto } from './dto/product.dto';
import { PrismaService } from 'src/database/prisma.service';



@Injectable()
export class ProductService {
  constructor(private prisma: PrismaService){}

    async create(data: ProductDto) {
      try {
        const {
          name, 
          price,   
        } = data;
  
      
        const product = await this.prisma.product.create({
          data: {
            name,
            price
          },
        });
  
        return product;
      } catch (error) {
        console.log(error)
        throw new Error('Falha ao criar product');
      }
    }
  
    async findOne(id: string) {
      const product = await this.prisma.product.findUnique({ where: { id } });
      if (!product) {
        throw new NotFoundException(`producte com ID ${id} não encontrado`);
      }
      return product;
    }
  
    async remove(id: string,) {
      try {
        const productDeletada = await this.prisma.product.delete({
          where: { id },
        });
  
        return productDeletada;
      } catch (error) {
        throw new NotFoundException(`product com ID ${id} não encontrada`);
      }
    }
  
    async delete(id: string) {
      try {
        const deletedproduct = await this.prisma.product.delete({
          where: { id },
        });
  
        return deletedproduct;
      } catch (error) {
        throw new NotFoundException(`product com ID ${id} não encontrada`);
      }
    }
  
    async update(id: string, data: ProductDto) {
      try {
        const { name, price } = data;
  
        const updateproduct = await this.prisma.product.update({
          where: { id},
          data: {
            name,
            price,
          },
        });
  
        return updateproduct;
      } catch (error) {
        throw new BadRequestException (`Falha ao atualizar product com ID ${id}`);
      }
    }
  
    async findAll() {
      try {
        const product = await this.prisma.product.findMany();
        return product;
      } catch (error) {
        throw new BadRequestException('Falha ao obter product');
      }
    }
  }

