import { Body, Controller, Post } from '@nestjs/common';
import { AddRoleDTO } from './dto';
import { RoleService } from './role.service';

@Controller('role')
export class RoleController {
  constructor(private roleService: RoleService) {}

  @Post('add')
  addRole(@Body() dto: AddRoleDTO) {
    return this.roleService.addRole(dto);
  }
}
