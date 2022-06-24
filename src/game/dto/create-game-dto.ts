import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsPositive } from "class-validator";

export class CreateGameDto{
  @IsNumber()
  @IsPositive()
  @ApiProperty({
    description: 'O nº do game',
    example: 1,
  })
  number: number;
  name:string;
};
