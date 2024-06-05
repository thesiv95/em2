import { Controller, Get, Post, Query } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get('/')
  async checkUsers(@Query('step') step: number) {
    return this.userService.checkUsers(step);
  }

  @Post('/')
  async generateUsers() {
    return this.userService.generateUsers();
  }
}
