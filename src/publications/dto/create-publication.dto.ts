import {  IsString, IsNotEmpty } from "class-validator";

export class CreatePublicationsDTO {

    @IsNotEmpty()
    id: number;

    @IsNotEmpty()
    @IsString()
    publication_date: string;

    @IsString()
    publication_place: string;

    @IsNotEmpty()
    @IsString()
    publication_number: string;

    @IsNotEmpty()
    @IsString()
    publication_type: string;

    @IsNotEmpty()
    @IsString()
    publication_name: string;
}