import { Body, Controller, Post } from '@nestjs/common';
import { AddUserDTO } from './dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}
  @Post('add')
  addUser(@Body() dto: AddUserDTO) {
    return this.userService.addUser(dto);
  }
}
