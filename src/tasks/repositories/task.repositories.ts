import { HttpStatus, Injectable } from '@nestjs/common';
import { IRepository } from 'src/common/repositories/IRepository';
import { Task } from '../models/task.model';
import deleteTask from './database/deleteTask';
import getAllTasksOwnedByUserId from './database/getAllTasksOwnedByUserId';
import getTask from './database/getTask';
import getTasksByStatusAndOwnedByUserId from './database/getTasksByStatusAndOwnedByUserId';
import putTask from './database/putTask';
import buildOneTask from './helpers/task.build';
import buildTasks from './helpers/tasks.collection.build';

@Injectable()
export class TaskRepository implements IRepository {
  async getOne(taskId: string): Promise<Task> {
    const response = await getTask(taskId);
    return response.Items.length > 0 ? buildOneTask(response.Items) : null;
  }

  async save(taskData: Task): Promise<Task> {
    const responseCommand = await putTask(taskData);

    if (responseCommand.$metadata.httpStatusCode !== HttpStatus.OK)
      return new Task();

    return taskData;
  }

  async getAll(userId: string): Promise<Task[]> {
    const responseTasks = await getAllTasksOwnedByUserId(userId);

    if (responseTasks.$metadata.httpStatusCode !== HttpStatus.OK) {
      return [];
    }

    return responseTasks.Count > 0 && responseTasks.Items
      ? buildTasks(responseTasks.Items)
      : [];
  }

  async delete(taskId: string, userId: string): Promise<boolean> {
    const response = await deleteTask(taskId, userId);
    return response.$metadata.httpStatusCode !== HttpStatus.OK ? false : true;
  }

  async getByStatusOwnedUserId(
    status: string,
    userId: string,
  ): Promise<Task[]> {
    const responseTasks = await getTasksByStatusAndOwnedByUserId(
      status,
      userId,
    );

    if (responseTasks.$metadata.httpStatusCode !== HttpStatus.OK) {
      return [];
    }

    return responseTasks.Count > 0 && responseTasks.Items
      ? buildTasks(responseTasks.Items)
      : [];
  }
}
