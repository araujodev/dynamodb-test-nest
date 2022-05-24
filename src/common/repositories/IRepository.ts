import { IBaseModel } from '../models/IBaseModel';

export interface IRepository {
  getOne(id: string): Promise<IBaseModel>;
  save(data: IBaseModel): Promise<IBaseModel>;
  getAll(): Promise<IBaseModel[]>;
  delete(id: string): Promise<boolean>;
}
