import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Sales } from './sale.entity';

  @Injectable()
  export class SalesService {
      constructor(@InjectRepository(Sales) private repo: Repository<Sales>){}

        // Add Sales data
        addSalesRecord(id: number, sales_amount: string, sales_type: string, sales_description: string){
            const sale =  this.repo.create({ id, sales_amount, sales_type, sales_description })
            return this.repo.save(sale)
        }  
      
        // Get all Sales
        getSales(){
            return this.repo.find();
        }
        
        // Get single sale with ID
        getSale(id: number){
            if(!id){
                return null
            }
            return this.repo.findOne(id);
        }
        
        // Update the sales record
        async updateSaleDetails(id: number, attrs: Partial<Sales>){
            const sale = await this.getSale(id);
            if(!sale){
                throw new NotFoundException('Sale not found')
            }
            Object.assign(sale, attrs );
            return this.repo.save(sale)
        }
        
        // Delete the sale
        async deleteSale(id: number){
            const sale = await this.getSale(id);
            if(!sale){
                throw new NotFoundException('Sale not found')
            }
            return this.repo.remove(sale)
        }
  }