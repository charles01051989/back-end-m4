import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { CreateGameDto } from "./dto/create-game-dto";
import { GameService } from "./game.service";
import { ApiOperation, ApiTags } from "@nestjs/swagger";
import { Game } from "./entities/game.entity";

@ApiTags('game')
@Controller('game')
export class GameController {
  constructor (private gameService: GameService) {}

  @Get()
  @ApiOperation({
    summary: 'Listar todos os games!'
  })
  findAll(): Promise<Game[]> {
    return this.gameService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Visualizar um game!'
  })
  findOne(@Param('id') id: string): Promise<Game>{
    return this.gameService.findOne(id)
  }

  @Post()
  @ApiOperation({
    summary: 'Criar um game!'
  })
  create(@Body() dto: CreateGameDto) {
    return this.gameService.create(dto);
  }
};
