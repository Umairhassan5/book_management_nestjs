import {  IsString, IsNumber, IsOptional } from "class-validator";

export class UpdateReceiptsDto {

    @IsOptional()
    @IsNumber()
    receipt_number: number;

    @IsOptional()
    @IsString()
    receipt_type: string;

    @IsOptional()
    @IsString()
    receipt_description: string;
}