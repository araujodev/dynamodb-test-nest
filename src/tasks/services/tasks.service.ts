import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { TaskRepository } from '../repositories/task.repositories';
import { v4 as uuid } from 'uuid';
import { Task } from '../models/task.model';

@Injectable()
export class TasksService {
  constructor(private readonly taskRepository: TaskRepository) {}

  async getTaskById(id: string): Promise<Task> {
    return await this.taskRepository.getOne(id);
  }

  async getAllTasksByUserId(userId: string): Promise<Task[]> {
    return await this.taskRepository.getAll(userId);
  }

  async getTasksByStatusOwnedByUserId(userId: string, status: string) {
    return await this.taskRepository.getByStatusOwnedUserId(status, userId);
  }

  async createTask(taskData: Task): Promise<Task> {
    taskData.id = uuid();
    taskData.createdAt = new Date();
    return await this.taskRepository.save(taskData);
  }

  async updateTask(taskData: Task): Promise<Task> {
    return await this.taskRepository.save(taskData);
  }

  async deleteTaskById(taskId: string, userId: string): Promise<boolean> {
    const requestedTask = await this.taskRepository.getOne(taskId);
    if (!requestedTask) {
      throw new HttpException(
        'Task not found to delete',
        HttpStatus.PRECONDITION_FAILED,
      );
    }
    return await this.taskRepository.delete(taskId, userId);
  }
}
