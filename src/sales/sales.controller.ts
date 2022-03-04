
import { Controller, Get, Param, Post, Body, Delete, NotFoundException, Patch } from '@nestjs/common';
import { SalesService } from './sales.service';
import { CreateSalesDTO } from './dto/create-sales.dto';
import { UpdateSalesDto } from './dto/update-sales.dto';

@Controller('sales')
export class SalesController {
    constructor(private salesService: SalesService) { }

    @Post('/add')
    async addSales(@Body() body : CreateSalesDTO) {
        const sale = await this.salesService.addSalesRecord(body.id, body.sales_amount, body.sales_type, body.sales_description);
        return sale;
    }

    @Get()
    async getSales() {
        const sales = await this.salesService.getSales();
        return sales;
    }

    @Get('/:id')
    async getSale(@Param('id') id: string){
        const sale = await this.salesService.getSale(parseInt(id));
        if(!sale){
            throw new NotFoundException('sale not found against this ID')
        }
        return sale;
    }

    @Patch('/:id')
    async updateSale(@Param('id') id: string, @Body() body: UpdateSalesDto){
        return this.salesService.updateSaleDetails(parseInt(id), body);
    }
   
    @Delete('/:id')
    async deleteSale(@Param('id') id: string){
        return this.salesService.deleteSale(parseInt(id));
    }
}
