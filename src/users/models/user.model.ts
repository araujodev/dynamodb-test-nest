import { IBaseModel } from 'src/common/models/IBaseModel';

export class User implements IBaseModel {
  id: string;
  name: string;
  lastName: string;
  age: number;
  email: string;
}
