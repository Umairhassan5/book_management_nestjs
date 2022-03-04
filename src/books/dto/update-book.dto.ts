import {  IsString,  IsOptional, IsNumber } from "class-validator";

export class UpdateBookDto {

    @IsOptional()
    @IsString()
    title: string;

    @IsOptional()
    @IsString()
    description: string;

    @IsOptional()
    @IsString()
    author: string;
}