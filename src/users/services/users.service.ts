import { Injectable } from '@nestjs/common';
import { User } from '../models/user.model';
import { UserRepository } from '../repositories/user.repositories';
import { v4 as uuid } from 'uuid';

@Injectable()
export class UsersService {
  constructor(private readonly userRepository: UserRepository) {}

  async getUserById(id: string): Promise<User> {
    const user = new User();
    user.id = id;
    return await this.userRepository.getUser(user);
  }

  async createUser(userData: User): Promise<User> {
    userData.id = uuid();
    return await this.userRepository.insert(userData);
  }
}
