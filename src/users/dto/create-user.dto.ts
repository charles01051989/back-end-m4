import { ApiProperty } from "@nestjs/swagger"
import { IsBoolean, IsString, IsUrl, Matches, MinLength } from "class-validator"

export class CreateUserDto {
  @IsString()
  @ApiProperty({
    description: 'O nome do usuário',
    example: 'AlaorRibeiro'
  })
  name: string
  @IsString()
  @MinLength(6)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'Senha muito fraca',
  })
  @ApiProperty({
    description: 'Senha do usuário para login',
    example: 'Abcd@1234',
  })
  password: string

  @IsUrl()
  @ApiProperty({
    description: 'Imagem de perfil do usuário',
    example: 'https://http2.mlstatic.com/D_NQ_NP_965824-MLB47719778463_092021-O.jpg',
  })
  image: string
  @IsBoolean()
  @ApiProperty({
    description: 'Informação se é ou não administrador',
  })
  isAdmin: boolean

}
