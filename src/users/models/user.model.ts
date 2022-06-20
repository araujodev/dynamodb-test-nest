import { BaseModel } from 'src/common/models/BaseModel';

export class User extends BaseModel {
  name: string;
  lastName: string;
  age: number;
  email: string;
}
