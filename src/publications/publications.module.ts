import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Publications } from './publications.entity';
import { PublicationsController } from './publications.controller';
import { PublicationsService } from './publications.service';

@Module({
  imports: [TypeOrmModule.forFeature([Publications])],
  controllers: [PublicationsController],
  providers: [PublicationsService]
})
export class PublicationsModule {}
