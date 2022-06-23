import { Controller, Get, Post } from "@nestjs/common";
import { GameService } from "./table.service";

@Controller('game')
export class GameController {
  constructor (private gameService: GameService) {}
  @Get()
  findAll() {
    return 'Buscar todos os games!'
  }
  @Post()
  create() {
    return 'Inserir um game!'
  }
};
