import { Injectable } from "@nestjs/common";

@Injectable()
export class GameService {
  findAll() {
    return 'Buscar todos os games!'
  }
  create() {
    return 'Inserir um game!'
  }
}
