import {  IsString, IsNumber, IsNotEmpty } from "class-validator";

export class CreateStockDTO {

    @IsNotEmpty()
    id: number;

    @IsNotEmpty()
    @IsString()
    stock_items: string;

    @IsNumber()
    stock_number: number;

    @IsNotEmpty()
    @IsString()
    stock_type: string;

    @IsNotEmpty()
    @IsString()
    stock_description: string;
}