import { ApiProperty } from "@nestjs/swagger";
import { IsUUID } from "class-validator";

export class CreateFavoriteDto {
  @IsUUID()
  @ApiProperty({
    description: 'ID do perfil que está adicionando aos favoritos',
    example: 'b7178ccc-a3b6-42d3-9daa-a695ff43f56b',
  })
  profileId: string;

  @IsUUID(undefined, { each: true })
  @ApiProperty({
    description: 'Games favoritos',
    example: '["17cbd74e-91dd-43ae-a8d9-eae123b0aad5", "4db1e332-c59f-4e21-83c4-847e3410eb5a"]',
  })
  games: string[]

}
