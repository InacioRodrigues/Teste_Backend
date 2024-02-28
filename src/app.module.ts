import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SaleModule } from './modules/sale/sale.module';
import { ClientModule } from './modules/client/client.module';
import { ProductModule } from './modules/product/product.module';

@Module({
  imports: [SaleModule, ClientModule, ProductModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
 