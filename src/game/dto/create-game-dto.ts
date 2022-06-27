import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsPositive, IsString } from "class-validator";

export class CreateGameDto{
  @IsNumber()
  @IsPositive()
  @ApiProperty({
    description: 'O nº do game',
    example: 1,
  })
  number: number;
  @IsString()
  @ApiProperty({
  description: 'O nome do game',
  example: 'Blabla',})
  name:string;
};
