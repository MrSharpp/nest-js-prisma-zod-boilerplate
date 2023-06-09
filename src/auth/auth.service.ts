import { Injectable } from '@nestjs/common';
import { Prisma, User } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}

  async login(
    userWhereUnique: Prisma.UserWhereUniqueInput
  ): Promise<User | undefined> {
    return this.prisma.user.findUnique({ where: userWhereUnique });
  }
}
