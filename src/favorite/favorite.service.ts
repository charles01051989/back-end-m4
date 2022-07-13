import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateFavoriteDto } from './dto/create-favorite.dto';
import { UpdateFavoriteDto } from './dto/update-favorite.dto';

@Injectable()
export class FavoriteService {
  constructor(private readonly prisma: PrismaService) {}

  create(createFavoriteDto: CreateFavoriteDto) {
    const data: Prisma.FavoriteCreateInput = {
      profile: {
        connect: {id: createFavoriteDto.profileId}
      },
     games: {
      connect: createFavoriteDto.games.map((gameId) => ({
        id: gameId,
      })),
     },
    }
    return this.prisma.favorite.create({
      data,
      select: {
        id: true,
        profile: {
          select: {
            title: true,
            image: true,
          }
        },
        games: {
          select: {
            title: true,
            genres: true,
          }
        }
      },

     }).catch(this.handleError)
  }

  handleError(error: Error): undefined {
    const errorLines = error.message?.split('\n');
    const lastErrorLine = errorLines[errorLines.length - 1]?.trim();
    throw new UnprocessableEntityException(
      lastErrorLine || 'Ops algum erro ocorreu!',
    );
  }


  findOne(id: string) {
    return this.prisma.favorite.findUnique({
      where: { id },
      include: {
        profile: {
          select: {
            title: true,
            image: true,
          }
        },
        games: {
          select: {
            id: true,
            title: true,
            description: true,
            image: true,
            year: true,
            genres: true,
          }
        }
      }
    })
  }

  update(id: string, updateFavoriteDto: UpdateFavoriteDto) {
    return `This action updates a #${id} favorite`;
  }

  delete(id: string) {
    return `This action removes a #${id} favorite`;
  }
}
