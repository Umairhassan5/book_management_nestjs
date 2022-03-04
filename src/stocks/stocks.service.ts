import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Stock } from './stocks.entity'; 

  @Injectable()
  export class StockService {
      constructor(@InjectRepository(Stock) private repo: Repository<Stock>){}

        // Add stocks data
        addStock(id: number, stock_items: string, stock_number: number, stock_type: string, stock_description: string){
            const stock =  this.repo.create({ id, stock_items, stock_number, stock_type,  stock_description})
            return this.repo.save(stock)
        }  
      
        // Get all stocks
        getStocks(){
                return this.repo.find();
        }
        
        // Get single stock with ID
        getStock(id: number){
            if(!id){
                return null
            }
            return this.repo.findOne(id);
        }
        
        // Update the books record
        async updateStockDetails(id: number, attrs: Partial<Stock>){
            const stock = await this.getStock(id);
            if(!stock){
                throw new NotFoundException('stock not found')
            }
            Object.assign(stock, attrs );
            return this.repo.save(stock)
        }
        
        // Delete the book
        async deleteStock(id: number){
            const stock = await this.getStock(id);
            if(!stock){
                throw new NotFoundException('stock not found')
            }
            return this.repo.remove(stock)
        }
  }