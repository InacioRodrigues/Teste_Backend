import { Controller, Get, Post, Body, Patch, Param, Delete, Put, ParseIntPipe } from '@nestjs/common';
import { SaleService } from './sale.service';
import { SaleDto } from './dto/sale.dto';


@Controller('api/v1/sale')
export class SaleController {
  constructor(private readonly saleService: SaleService) { }

  @Post()
  create(@Body() SaleDto: SaleDto) {
    return this.saleService.create(SaleDto);
  }

  @Get()
  findAll() {
    return this.saleService.findAll();
  }
  

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.saleService.findOne(id);
  }


  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: string,
    @Body() SaleDto: SaleDto,
  ) {
    return this.saleService.update(id, SaleDto);
  }


  @Delete(':id')
  async remove(
    @Param('id', ParseIntPipe) id: string,
  ) {
    const deletedsale = await this.saleService.remove(id);
    return {
      message: `Sadeletedsale com ID ${id} foi excluído com sucesso.`,
      deletedsale,
    };
  }

}
