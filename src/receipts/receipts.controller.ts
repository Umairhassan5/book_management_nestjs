
import { Controller, Get, Param, Post, Body, Delete, NotFoundException, Patch } from '@nestjs/common';
import { ReceiptsService } from './receipts.service';
import { CreateReceiptsDTO } from './dto/create-receipts.dto';
import { UpdateReceiptsDto } from './dto/update-receipts.dto'; 

@Controller('receipts')
export class ReceiptsController {
    constructor(private receiptsService: ReceiptsService) { }

    @Post('/add')
    async addReceipt(@Body() body : CreateReceiptsDTO) {
        const receipt = await this.receiptsService.addReceipt(body.id, body.receipt_number, body.receipt_type, body.receipt_description);
        return receipt;
    }

    @Get()
    async getReceipts() {
        const receipts = await this.receiptsService.getReceipts();
        return receipts;
    }

    @Get('/:id')
    async getReceipt(@Param('id') id: string){
        const receipt = await this.receiptsService.getReceipt(parseInt(id));
        if(!receipt){
            throw new NotFoundException('receipt not found against this ID')
        }
        return receipt;
    }

    @Patch('/:id')
    async updateReceipt(@Param('id') id: string, @Body() body: UpdateReceiptsDto){
        return this.receiptsService.updateReceiptDetails(parseInt(id), body);
    }
   
    @Delete('/:id')
    async deleteReceipt(@Param('id') id: string){
        return this.receiptsService.deleteReceipt(parseInt(id));
    }
}
