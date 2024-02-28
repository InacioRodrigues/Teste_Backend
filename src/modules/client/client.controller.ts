import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, Put } from '@nestjs/common';
import { ClientService } from './client.service';
import { ClientDto } from './dto/client.dto';

@Controller('api/v1/client')
export class ClientController {
  constructor(private readonly clientService: ClientService) { }

  @Post()
  create(@Body() ClientDto: ClientDto) {
    return this.clientService.create(ClientDto);
  }


  @Get()
  findAll() {
    return this.clientService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.clientService.findOne(id);
  }


  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: string,
    @Body() ClientDto: ClientDto,
  ) {
    return this.clientService.update(id, ClientDto);
  }


  @Delete(':id')
  async remove(
    @Param('id', ParseIntPipe) id: string,
  ) {
    const deletedclient = await this.clientService.remove(id);
    return {
      message: `client com ID ${id} foi excluído com sucesso.`,
      deletedclient,
    };
  }

}
