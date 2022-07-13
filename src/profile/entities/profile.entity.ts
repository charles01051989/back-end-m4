import { User } from "src/users/entities/user.entity";


export class Profile {
  id?: string;
  user?: User;
  title?: string;
  image?: string;
  createdAt?: Date;
  updatedAt?: Date;
}
