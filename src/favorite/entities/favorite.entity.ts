import { Profile } from "@prisma/client";
import { Game } from "src/game/entities/game.entity";

export class Favorite {
  id?: string;
  profile?: Profile;
  createdAt?: Date
  updatedAt?: Date
  games?: Game[];
}
