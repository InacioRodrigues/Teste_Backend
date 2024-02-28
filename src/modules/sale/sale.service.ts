import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { SaleDto } from './dto/sale.dto';
import { PrismaService } from 'src/database/prisma.service';


@Injectable()
export class SaleService {
  constructor(private prisma: PrismaService) { }

  async create(data: SaleDto) {
    try {
      const { total, clientId, } = data;

      const sale = await this.prisma.sale.create({
        data: {
          total, clientId,
        },
      });

      return sale;
    } catch (error) {
      console.log(error)
      throw new Error('Falha ao criar sale');
    }
  }

  async findOne(id: string) {
    const sale = await this.prisma.sale.findUnique({ where: { id } });
    if (!sale) {
      throw new NotFoundException(`salee com ID ${id} não encontrado`);
    }
    return sale;
  }

  async remove(id: string,) {
    try {
      const saleDeletada = await this.prisma.sale.delete({
        where: { id },
      });

      return saleDeletada;
    } catch (error) {
      throw new NotFoundException(`sale com ID ${id} não encontrada`);
    }
  }

  async delete(id: string) {
    try {
      const deletedsale = await this.prisma.sale.delete({
        where: { id },
      });

      return deletedsale;
    } catch (error) {
      throw new NotFoundException(`sale com ID ${id} não encontrada`);
    }
  }

  
  async update(id: string, data: SaleDto) {
    try {
      const { total, clientId } = data;

      const updatesale = await this.prisma.sale.update({
        where: { id },
        data: { 
          total, clientId,
        },
      });

      return updatesale;
    } catch (error) {
      throw new BadRequestException(`Falha ao atualizar sale com ID ${id}`);
    }
  }

  async findAll() {
    try {
      const sale = await this.prisma.sale.findMany();
      return sale;
    } catch (error) {
      throw new BadRequestException('Falha ao obter sale');
    }
  }
}
