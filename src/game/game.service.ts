import { Injectable, NotFoundException, UnprocessableEntityException } from "@nestjs/common";
import { Genre, Prisma } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateGameDto } from "./dto/create-game-dto";
import { Game } from "./entities/game.entity";

@Injectable()
export class GameService {

  constructor(private readonly prisma: PrismaService){}

   findAll(): Promise<Genre[]>{
    // return this.prisma.game.findMany({include:{genres:{orderBy:{name:'asc'}}}})
    return this.prisma.genre.findMany({include:{games:true},orderBy:{name:'asc'}})
  }

  async findById(id: string): Promise<Game>{
    const record = await this.prisma.game.findUnique({ where: { id } });

    if (!record) {
      throw new NotFoundException(`Registro com o '${id}' não encontrado.`)
    }
    return record;
  }

  async findOne(id: string): Promise<Game> {
    return this.findById(id);
  }

  create(dto: CreateGameDto){
    const data: Prisma.GameCreateInput = {
      title: dto.title,
      image: dto.image,
      description: dto.description,
      year: dto.year,
      imdbScore: dto.imdbScore,
      trailerYouTubeUrl: dto.trailerYouTubeUrl,
      gamePlayYouTubeUrl: dto.gamePlayYouTubeUrl,
      genres: {
        connect: dto.genres.map((genresId) =>({ id: genresId,}))
      }
    }

    return this.prisma.game.create({ data }).catch(this.handleError);
  }

  handleError(error: Error): undefined {
    const errorLines = error.message?.split('\n');
    const lastErrorLine = errorLines[errorLines.length - 1]?.trim();
    throw new UnprocessableEntityException(lastErrorLine || "Ops algum erro ocorreu!");
;  }

  async update(id: string, dto: any): Promise<Game> {
    await this.findById(id);
    const data: Partial<Game> = {...dto}
    return this.prisma.game.update({ where: {id}, data }).catch(this.handleError);
  }

  async delete(id: string){
    await this.findById(id);
    await this.prisma.game.delete({ where: { id } });
  }

}
