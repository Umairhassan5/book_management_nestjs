import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Receipts } from './receipts.entity';

  @Injectable()
  export class ReceiptsService {                        
      constructor(@InjectRepository(Receipts) private repo: Repository<Receipts>){}

        // Add receipts data
        addReceipt(id: number, receipt_number: number, receipt_type: string, receipt_description: string){
            const receipt =  this.repo.create({ id, receipt_number, receipt_type, receipt_description })
            return this.repo.save(receipt)
        }  
      
        // Get all receipts
        getReceipts(){
                return this.repo.find();
        }
        
        // Get single receipt with ID
        getReceipt(id: number){
            if(!id){
                return null
            }
            return this.repo.findOne(id);
        }
        
        // Update the receipts record
        async updateReceiptDetails(id: number, attrs: Partial<Receipts>){
            const receipt = await this.getReceipt(id);
            if(!receipt){
                throw new NotFoundException('receipt not found')
            }
            Object.assign(receipt, attrs );
            return this.repo.save(receipt)
        }
        
        // Delete the receipt
        async deleteReceipt(id: number){
            const receipt = await this.getReceipt(id);
            if(!receipt){
                throw new NotFoundException('receipt not found')
            }
            return this.repo.remove(receipt)
        }
  }