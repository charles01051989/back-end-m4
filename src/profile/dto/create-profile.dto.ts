import { ApiProperty } from "@nestjs/swagger"
import { IsString, IsUrl, IsUUID } from "class-validator"

export class CreateProfileDto {
  @IsString()
  @ApiProperty({
    description: 'Nome do perfil do usuário',
    example: 'alaricodasneves'
  })
  title: string
  @IsUUID()
  @ApiProperty({
    description: 'ID do usuário do perfil',
    example: 'b7178ccc-a3b6-42d3-9daa-a695ff43f56b',
  })
  userId: string;
  @IsUrl()
  @ApiProperty({
    description: 'Imagem de perfil',
    example: 'https://m.media-amazon.com/images/I/71CPNYUJQnL._AC_SX425_.jpg'
  })
  image: string

}
