import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Publications } from './publications.entity';

  @Injectable()
  export class PublicationsService {
      constructor(@InjectRepository(Publications) private repo: Repository<Publications>){}

        // Add publications data
        addPublications(id: number, publication_date: string, publication_place: string, publication_number: string, publication_type: string, publication_name: string){
            const publication =  this.repo.create({ id, publication_date, publication_place, publication_number, publication_type, publication_name})
            return this.repo.save(publication)
        }  
      
        // Get all publications
        getPublications(){
                return this.repo.find();
        }
        
        // Get single publication with ID
        getPublication(id: number){
            if(!id){
                return null
            }
            return this.repo.findOne(id);
        }
        
        // Update the publications record
        async updatePublicationDetails(id: number, attrs: Partial<Publications>){
            const publication = await this.getPublication(id);
            if(!publication){
                throw new NotFoundException('Publication not found')
            }
            Object.assign(publication, attrs );
            return this.repo.save(publication)
        }
        
        // Delete the publication
        async deletePublication(id: number){
            const publication = await this.getPublication(id);
            if(!publication){
                throw new NotFoundException('Publication not found')
            }
            return this.repo.remove(publication)
        }
  }