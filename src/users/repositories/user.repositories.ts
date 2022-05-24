import { HttpStatus, Injectable } from '@nestjs/common';
import putUser from './database/putUser';
import { User } from '../models/user.model';
import getUser from './database/getUser';
import buildOneUser from './helpers/user.build';

@Injectable()
export class UserRepository {
  async getUser(userData: User) {
    const response = await getUser(userData);
    return response.Item ? buildOneUser(response.Item) : null;
  }

  async insert(userData: User): Promise<User> {
    const responseCommand = await putUser(userData);

    if (responseCommand.$metadata.httpStatusCode !== HttpStatus.OK)
      return new User();

    return userData;
  }
}
