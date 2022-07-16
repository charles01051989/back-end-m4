import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { PrismaService } from "src/prisma/prisma.service";


@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly prisma: PrismaService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken,
      ignoreExpiration: false,
      secretOrkey: process.env.JWT_SECRET,
    })
  }
 async validate(payload: { name: string }){
    const user = await this.prisma.user.findUnique({where: { name: payload.name }})

    if(!user) {
      throw new UnauthorizedException(
        'Usuário não existe',
      )
    }
    delete user.password;

    return user;
  }
}
