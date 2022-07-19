import { Genre } from "src/genre/entities/genre.entity";

export class Game {
  id?: string;
  title?: string;
  description?: string;
  year?: number;
  image?: string
  imdbScore?: number;
  gamePlayYouTubeUrl?: string;
  trailerYouTubeUrl?: string
  genres?: Genre[];
};
