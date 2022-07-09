import { ApiProperty } from "@nestjs/swagger"
import { IsString, IsUrl } from "class-validator"

export class CreateProfileDto {
  @IsString()
  @ApiProperty({
    description: 'Perfil de administrador ou usuário',
    example: 'Administrador'
  })
  title: string
  @IsUrl()
  @ApiProperty({
    description: 'Imagem de perfil',
    example: 'https://m.media-amazon.com/images/I/71CPNYUJQnL._AC_SX425_.jpg'
  })
  image: string

}
