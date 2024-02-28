import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, Put } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductDto } from './dto/product.dto';


@Controller('api/v1/product')
export class ProductController {
  constructor(private readonly productService: ProductService) { }

  @Post()
  create(@Body() ProductDto: ProductDto) {
    return this.productService.create(ProductDto);
  }


  @Get()
  findAll() {
    return this.productService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productService.findOne(id);
  }


  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: string,
    @Body() ProductDto: ProductDto,
  ) {
    return this.productService.update(id, ProductDto);
  }


  @Delete(':id')
  async remove(
    @Param('id', ParseIntPipe) id: string,
  ) {
    const deletedProduct = await this.productService.remove(id);
    return {
      message: `product com ID ${id} foi excluído com sucesso.`,
      deletedProduct,
    };
  }
}
