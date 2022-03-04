import {  IsString, IsOptional } from "class-validator";

export class UpdateSalesDto {

    @IsOptional()
    @IsString()
    sales_amount: string;

    @IsOptional()
    @IsString()
    sales_type: string;

    @IsOptional()
    @IsString()
    sales_description: string;
}