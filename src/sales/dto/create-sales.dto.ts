import {  IsString, IsNotEmpty } from "class-validator";

export class CreateSalesDTO {

    @IsNotEmpty()
    id: number;

    @IsNotEmpty()
    @IsString()
    sales_amount: string;

    @IsString()
    sales_type: string;

    @IsNotEmpty()
    @IsString()
    sales_description: string;
}