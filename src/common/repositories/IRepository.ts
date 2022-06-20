import { BaseModel } from '../models/BaseModel';

export interface IRepository {
  getOne(id: string): Promise<BaseModel>;
  save(data: BaseModel): Promise<BaseModel>;
  getAll(paramterFilter?: string): Promise<BaseModel[]>;
  delete(id: string, ownerId?: string): Promise<boolean>;
}
