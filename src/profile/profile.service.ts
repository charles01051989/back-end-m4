import {
  Injectable,
  NotFoundException,
  UnprocessableEntityException,
} from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProfileDto } from './dto/create-profile.dto';
import { Profile } from './entities/profile.entity';

@Injectable()
export class ProfileService {
  constructor(private readonly prisma: PrismaService) {}

  findAll(): Promise<Profile[]> {
    return this.prisma.profile.findMany();
  }

  async findById(id: string): Promise<Profile> {
    const record = await this.prisma.profile.findUnique({ where: { id } });

    if (!record) {
      throw new NotFoundException(`Registro com o '${id}' não encontrado.`);
    }
    return record;
  }

  async findOne(id: string): Promise<Profile> {
    return this.findById(id);
  }

  create(createProfileDto: CreateProfileDto) {
    const data:  Prisma.ProfileCreateInput = {
      user: {
        connect: {
          id: createProfileDto.userId,
        },
      },
      title: createProfileDto.title,
      image: createProfileDto.image,

    };

    return this.prisma.profile.create({ data }).catch(this.handleError);
  }

  handleError(error: Error): undefined {
    const errorLines = error.message?.split('\n');
    const lastErrorLine = errorLines[errorLines.length - 1]?.trim();
    throw new UnprocessableEntityException(
      lastErrorLine || 'Ops algum erro ocorreu!',
    );
  }

  async update(id: string, createProfileDto): Promise<Profile> {
    await this.findById(id);
    const data:  Prisma.ProfileCreateInput = {
      user: {
        connect: {
          id: createProfileDto.userId,
        },
      },
      title: createProfileDto.title,
      image: createProfileDto.image,

    };
    return this.prisma.profile
      .update({ where: { id }, data })
      .catch(this.handleError);
  }

  async delete(id: string) {
    await this.findById(id);
    await this.prisma.profile.delete({ where: { id } });
  }
}
