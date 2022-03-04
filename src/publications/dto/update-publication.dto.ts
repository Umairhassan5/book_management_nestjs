import {  IsString,  IsOptional, IsNumber } from "class-validator";

export class UpdatePublicationsDto {

    @IsOptional()
    @IsString()
    publication_date: string;

    @IsOptional()
    @IsString()
    publication_place: string;

    @IsOptional()
    @IsString()
    publication_number: string;

    @IsOptional()
    @IsString()
    publication_type: string;

    @IsOptional()
    @IsString()
    publication_name: string;
}