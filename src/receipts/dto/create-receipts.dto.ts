import {  IsString, IsNumber, IsNotEmpty } from "class-validator";

export class CreateReceiptsDTO {

    @IsNotEmpty()
    id: number;

    @IsNotEmpty()
    @IsNumber()
    receipt_number: number;

    @IsString()
    receipt_type: string;

    @IsNotEmpty()
    @IsString()
    receipt_description: string;
}