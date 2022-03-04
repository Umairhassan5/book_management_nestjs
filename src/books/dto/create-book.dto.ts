import {  IsString, IsNotEmpty, IsNumber } from "class-validator";

export class CreateBookDTO {

    @IsNotEmpty()
    id: number;

    @IsNotEmpty()
    @IsString()
    title: string;

    @IsString()
    description: string;

    @IsNotEmpty()
    @IsString()
    author: string;
}