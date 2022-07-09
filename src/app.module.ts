import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GameModule } from './game/game.module';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { ProfileModule } from './profile/profile.module';


@Module({
  imports: [GameModule, PrismaModule, UsersModule, ProfileModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
