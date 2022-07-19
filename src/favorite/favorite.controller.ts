import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FavoriteService } from './favorite.service';
import { CreateFavoriteDto } from './dto/create-favorite.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Favorite } from './entities/favorite.entity';

@ApiTags('favorite')
@Controller('favorite')
export class FavoriteController {
  constructor(private readonly favoriteService: FavoriteService) {}

  @Post()
  @ApiOperation({
    summary: 'Criar lista de favoritos'
  })
  create(@Body() createFavoriteDto: CreateFavoriteDto) {
    return this.favoriteService.create(createFavoriteDto);
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Listar jogos favoritos pelo ID'
  })
  findOne(@Param('id') id: string) {
    return this.favoriteService.findOne(id);
  }

}
