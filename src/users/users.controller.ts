import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { User } from './models/user.model';
import { UsersService } from './services/users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get('show/:id')
  show(@Param() params: { id: string }) {
    const { id } = params;
    return this.userService.getUserById(id);
  }

  @Get('all')
  all() {
    return this.userService.getAllUsers();
  }

  @Post('create')
  create(@Body() userData: User) {
    return this.userService.createUser(userData);
  }

  @Put('update/:id')
  update(@Body() userData: User, @Param() params: { id: string }) {
    userData.id = params.id;
    return this.userService.updateUser(userData);
  }

  @Delete('delete/:id')
  @HttpCode(204)
  delete(@Param() params: { id: string }) {
    const { id } = params;
    return this.userService.deleteUserById(id);
  }
}
