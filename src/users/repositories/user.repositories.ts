import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import putUser from './database/putUser';
import { User } from '../models/user.model';
import getUser from './database/getUser';
import buildOneUser from './helpers/user.build';
import { IRepository } from 'src/common/repositories/IRepository';
import getAllUsers from './database/getAllUsers';
import buildUsers from './helpers/users.collection.build';
import deleteUser from './database/deleteUser';

@Injectable()
export class UserRepository implements IRepository {
  async getOne(userId: string) {
    const response = await getUser(userId);
    return response.Item ? buildOneUser(response.Item) : null;
  }

  async save(userData: User): Promise<User> {
    const responseCommand = await putUser(userData);

    if (responseCommand.$metadata.httpStatusCode !== HttpStatus.OK)
      return new User();

    return userData;
  }

  async getAll(): Promise<User[]> {
    const responseUsers = await getAllUsers();

    if (responseUsers.$metadata.httpStatusCode !== HttpStatus.OK) {
      return [];
    }

    return responseUsers.Count > 0 && responseUsers.Items
      ? buildUsers(responseUsers.Items)
      : [];
  }

  async delete(userId: string): Promise<boolean> {
    const response = await deleteUser(userId);
    return response.$metadata.httpStatusCode !== HttpStatus.OK ? false : true;
  }
}
