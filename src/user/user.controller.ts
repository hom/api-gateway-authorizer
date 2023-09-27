import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('')
  getUsers() {
    return this.userService.getUsers();
  }

  @Get(':userId')
  getUserById(@Param('userId') userId: string) {
    return this.userService.getUserById(userId);
  }

  @Post('')
  createUser(@Body() body) {
    return this.userService.createUser(body);
  }
}
