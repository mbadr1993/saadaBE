import { Injectable } from '@nestjs/common';
import { AddRoleDTO } from './dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class RoleService {
  constructor(private prisma: PrismaService) {}

  async addRole(dto: AddRoleDTO) {
    const role = await this.prisma.role.create({
      data: { name: dto.name, creatorName: dto.creatorName },
    });

    return role;
  }
}
