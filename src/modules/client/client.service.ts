import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { ClientDto } from './dto/client.dto';
import { PrismaService } from 'src/database/prisma.service';



@Injectable()
export class ClientService {
  constructor(private prisma: PrismaService) { }

  async create(data: ClientDto) {
    try {
      const {
        name,
        email
      } = data;

      const existClient = await this.prisma.client.findUnique({
        where: {
          email: email
        }
      })

      if (existClient) {
        throw new Error('Já existe client com esse email')
      }

      const client = await this.prisma.client.create({
        data: {
          name,
          email
        },
      });

      return client;
    } catch (error) {
      throw new BadRequestException(`Falha ao criar client`);
    }

  }

  async findOne(id: string) {
    const client = await this.prisma.client.findUnique({ where: { id } });
    if (!client) {
      throw new NotFoundException(`Cliente com ID ${id} não encontrado`);
    }
    return client;
  }

  async remove(id: string) {
    try {
      const clientDeletada = await this.prisma.client.delete({
        where: { id },
      });

      return clientDeletada;
    } catch (error) {
      throw new NotFoundException(`client com ID ${id} não encontrada`);
    }
  }

  async delete(id: string) {
    try {
      const deletedclient = await this.prisma.client.delete({
        where: { id },
      });

      return deletedclient;
    } catch (error) {
      throw new NotFoundException(`client com ID ${id} não encontrada`);
    }
  }

  async update(id: string, data: ClientDto) {
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
    } catch (error) {
      throw new error(`Falha ao atualizar client com ID ${id}`);
    }
  }

  async findAll() {
    try {
      const client = await this.prisma.client.findMany();
      return client;
    } catch (error) {
      throw new error('Falha ao obter client');
    }
  }
}
