import { Module } from '@nestjs/common';
import { UserRepository } from './repositories/user.repositories';
import { UsersService } from './services/users.service';
import { UsersController } from './users.controller';

@Module({
  providers: [UsersService, UserRepository],
  controllers: [UsersController],
})
export class UsersModule {}
