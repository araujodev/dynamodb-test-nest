import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { User } from '../models/user.model';
import { UserRepository } from '../repositories/user.repositories';
import { v4 as uuid } from 'uuid';

@Injectable()
export class UsersService {
  constructor(private readonly userRepository: UserRepository) {}

  async getUserById(id: string): Promise<User> {
    return await this.userRepository.getOne(id);
  }

  async getAllUsers(): Promise<User[]> {
    return await this.userRepository.getAll();
  }

  async createUser(userData: User): Promise<User> {
    userData.id = uuid();
    return await this.userRepository.save(userData);
  }

  async updateUser(userData: User): Promise<User> {
    return await this.userRepository.save(userData);
  }

  async deleteUserById(id: string): Promise<boolean> {
    const requestedUser = await this.userRepository.getOne(id);
    if (!requestedUser) {
      throw new HttpException(
        'User not found to delete',
        HttpStatus.PRECONDITION_FAILED,
      );
    }
    return await this.userRepository.delete(id);
  }
}
