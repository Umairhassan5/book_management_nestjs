import {  IsString,  IsOptional, IsNumber } from "class-validator";

export class UpdateStockkDto {

    @IsOptional()
    @IsString()
    stock_items: string;

    @IsOptional()
    @IsNumber()
    stock_number: number;

    @IsOptional()
    @IsString()
    stock_type: string;

    @IsOptional()
    @IsString()
    stock_description: string;
}