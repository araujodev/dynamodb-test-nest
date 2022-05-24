import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { User } from './models/user.model';
import { UsersService } from './services/users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get('show/:id')
  getUser(@Param() params: { id: string }) {
    const { id } = params;
    return this.userService.getUserById(id);
  }

  @Post('create')
  create(@Body() userData: User) {
    return this.userService.createUser(userData);
  }
}
