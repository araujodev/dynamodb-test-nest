import { BaseModel } from 'src/common/models/BaseModel';
import { TaskStatus } from '../constants/task-status.enum';

export class Task extends BaseModel {
  userId: string;
  description: string;
  status: TaskStatus;
}
