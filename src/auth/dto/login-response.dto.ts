import { ApiProperty } from '@nestjs/swagger';
import { User } from 'src/users/entities/user.entity'

export class LoginResponseDto {
  @ApiProperty({
    description: 'JWT gerado pelo login',
    example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoia2luZ3hpbWJpbmhhIiwiaWF0IjoxNjU3OTk1MzQ4LCJleHAiOjE2NTgwODE3NDh9.bmqgDB2gzhX_Uue-OJqTGZYOpXukgOQXbUmA5qG2t5w',
  })
  token: string;
  @ApiProperty({
    description: 'Dados do usuário autenticado',
  })
  user: User;
}
