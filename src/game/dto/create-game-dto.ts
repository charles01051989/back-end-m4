import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString, IsUrl } from "class-validator";

export class CreateGameDto{
  @IsString()
  @ApiProperty({
    description: 'O título do game',
    example: 'League of Legends'
  })
  title: string;
  @IsString()
  @ApiProperty({
    description: 'Descrição do game',
    example: 'A game is ...'
  })
  description: string;
  @IsNumber()
  @ApiProperty({
    description: 'Ano de criação do game',
    example: 2013
  })
  year: number;
  @IsString()
  @ApiProperty({
    description: 'Url da imagem',
    example: 'https://cloudfront-us-east-1.images.arcpublishing.com/infobae/K3BXUZZJ65CXRHTUVVUXDG7AFE.jpg'
  })
  image: string;
  @IsNumber()
  @ApiProperty({
    description: 'Avaliação do game de 0 a 5',
    example: 5
  })
  imdbScore: number;
  @IsString()
  @IsUrl()
  @ApiProperty({
    description: 'Url yotube gameplay',
    example: 'https://youtu.be/p4QG59y6FGE'
  })
  gamePlayYouTubeUrl: string;
  @IsString()
  @IsUrl()
  @ApiProperty({
    description: 'Trailer do game',
    example: 'https://youtu.be/mDYqT0_9VR4'
  })
  trailerYouTubeUrl: string;
};
