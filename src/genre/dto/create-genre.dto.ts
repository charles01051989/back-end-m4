import { ApiProperty } from "@nestjs/swagger"
import { IsString } from "class-validator"

export class CreateGenreDto {
  @IsString()
  @ApiProperty({
    description: 'Gênero do game',
    example: 'Luta'
  })
  name: string

}
