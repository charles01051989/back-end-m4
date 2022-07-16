import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { LoginResponseDto } from './dto/login-response.dto';
import { LoginDto } from './dto/login.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {

  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
    ) {}

  async login(loginDto: LoginDto): Promise<LoginResponseDto> {

    const {name, password } = loginDto

    const user = await this.prisma.user.findUnique({ where: { name } });

    if (!user) {
      throw new UnauthorizedException('Usuário e/ou senha inválidos');
    }


    const isHashValid = await bcrypt.compare(password, user.password);

    if (!isHashValid) {
      throw new UnauthorizedException('Usuário e/ou senha inválidos');
    }

    delete user.password;

    return {
      token: this.jwtService.sign({ name }),
      user,
    };
  }
}
