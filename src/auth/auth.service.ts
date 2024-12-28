import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { SigninDTO } from './dto';
import * as argon from 'argon2';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}

  async signIn(dto: SigninDTO) {
    // find user by userName
    const user = await this.prisma.user.findUnique({
      where: {
        userName: dto.userName,
      },
    });
    // if user is not found throw error
    if (!user) throw new ForbiddenException('Credentials incorrect!');
    // compair passwords
    const pwMatches = await argon.verify(user.password, dto.password);
    // if password is incorrect throw exception
    if (!pwMatches) throw new ForbiddenException('Credentials incorrect!');
    // send back the user
    delete user.password;
    return user;
  }
}
