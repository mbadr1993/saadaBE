import { ForbiddenException, Injectable } from '@nestjs/common';
import * as argon from 'argon2';
import { PrismaService } from 'src/prisma/prisma.service';
import { AddUserDTO } from './dto';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { error } from 'console';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async addUser(dto: AddUserDTO) {
    // Generate the password hash
    const hash = await argon.hash(dto.password);

    try {
      // Save the new user in the db
      const user = await this.prisma.user.create({
        data: {
          userName: dto.userName,
          password: hash,
          roleId: dto.roleId,
        },
      });

      delete user.password;

      // return the saved user
      return user;
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2002')
          throw new ForbiddenException('User is already exist!');
      }
    }
    throw error;
  }
}
