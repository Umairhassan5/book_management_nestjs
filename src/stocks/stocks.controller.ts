
import { Controller, Get, Param, Post, Body, Delete, NotFoundException, Patch } from '@nestjs/common';
import { StockService } from './stocks.service';
import { UpdateStockkDto } from './dto/update-stocks.dto';
import { CreateStockDTO } from './dto/create-stocks.dto';

@Controller('stocks')
export class StockController {
    constructor(private stockService: StockService) { }

    @Post('/add')
    async addStock(@Body() body : CreateStockDTO) {
        const stock = await this.stockService.addStock(body.id, body.stock_items, body.stock_number, body.stock_type,  body.stock_description);
        return stock;
    }

    @Get()
    async getStocks() {
        const stocks = await this.stockService.getStocks();
        return stocks;
    }

    @Get('/:id')
    async getStock(@Param('id') id: string){
        const stock = await this.stockService.getStock(parseInt(id));
        if(!stock){
            throw new NotFoundException('stock not found against this ID')
        }
        return stock;
    }

    @Patch('/:id')
    async updateStock(@Param('id') id: string, @Body() body: UpdateStockkDto){
        return this.stockService.updateStockDetails(parseInt(id), body);
    }
   
    @Delete('/:id')
    async deleteStock(@Param('id') id: string){
        return this.stockService.deleteStock(parseInt(id));
    }
}
