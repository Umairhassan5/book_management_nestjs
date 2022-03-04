
import { Controller, Get, Param, Post, Body, Delete, NotFoundException, Patch } from '@nestjs/common';
import { PublicationsService } from './publications.service';
import { CreatePublicationsDTO } from './dto/create-publication.dto';
import { UpdatePublicationsDto } from './dto/update-publication.dto';

@Controller('publications')
export class PublicationsController {
    constructor(private publicationsService: PublicationsService) { }

    @Post('/add')
    async addPublications(@Body() body : CreatePublicationsDTO) {
        const publication = await this.publicationsService.addPublications(body.id, body.publication_date, body.publication_place, body.publication_number,  body.publication_type, body.publication_name);
        return publication;
    }

    @Get()
    async getPublications() {
        const publications = await this.publicationsService.getPublications();
        return publications;
    }

    @Get('/:id')
    async getPublication(@Param('id') id: string){
        const stock = await this.publicationsService.getPublication(parseInt(id));
        if(!stock){
            throw new NotFoundException('stock not found against this ID')
        }
        return stock;
    }

    @Patch('/:id')
    async updatePublication(@Param('id') id: string, @Body() body: UpdatePublicationsDto){
        return this.publicationsService.updatePublicationDetails(parseInt(id), body);
    }
   
    @Delete('/:id')
    async deletePublication(@Param('id') id: string){
        return this.publicationsService.deletePublication(parseInt(id));
    }
}
