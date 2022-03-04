import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { User } from './users/user.entity';
import { BooksModule } from './books/books.module';
import { Book } from './books/book.entity';
import { Sales } from './sales/sale.entity';
import { Stock } from './stocks/stocks.entity';
import { Receipts } from './receipts/receipts.entity';
import { SalesModule } from './sales/sales.module';
import { ReceiptsModule } from './receipts/receipts.module';
import { StocksModule } from './stocks/stocks.module';
import { PublicationsModule } from './publications/publications.module';
import { Publications } from './publications/publications.entity';


@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'sqlite',
    database: 'db.sqlite',
    entities: [User, Book, Sales, Receipts, Stock, Publications],
    synchronize: true,
  }),UsersModule, BooksModule, SalesModule, ReceiptsModule, StocksModule, PublicationsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
