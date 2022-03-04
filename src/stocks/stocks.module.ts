import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StockController } from './stocks.controller';
import { StockService } from './stocks.service';
import { Stock } from './stocks.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Stock])],
  controllers: [StockController],
  providers: [StockService]
})
export class StocksModule {}
