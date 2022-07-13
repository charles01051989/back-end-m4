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
    example: '327d06c5-ea6c-4482-940b-6922bdbd5f0c',
  })
  userId: string;
  @IsUrl()
  @ApiProperty({
    description: 'Imagem de perfil',
    example: 'https://m.media-amazon.com/images/I/71CPNYUJQnL._AC_SX425_.jpg'
  })
  image: string

}
