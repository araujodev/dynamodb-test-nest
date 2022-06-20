import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Task } from '../models/task.model';
import { TasksService } from '../services/tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private readonly taskService: TasksService) {}

  @Get('show/:id')
  show(@Param() params: { id: string }) {
    const { id } = params;
    return this.taskService.getTaskById(id);
  }

  @Get('user/:userId/all')
  all(@Param() params: { userId: string }) {
    const { userId } = params;
    return this.taskService.getAllTasksByUserId(userId);
  }

  @Get('user/:userId/status/:status')
  byStatus(@Param() params: { userId: string; status: string }) {
    const { userId, status } = params;
    return this.taskService.getTasksByStatusOwnedByUserId(userId, status);
  }

  @Post('create')
  create(@Body() taskData: Task) {
    return this.taskService.createTask(taskData);
  }

  @Put('update/:id')
  update(@Body() taskData: Task, @Param() params: { id: string }) {
    taskData.id = params.id;
    taskData.createdAt = taskData.createdAt
      ? new Date(taskData.createdAt)
      : new Date();
    return this.taskService.updateTask(taskData);
  }

  @Delete('delete/:taskId/user/:userId')
  @HttpCode(204)
  delete(@Param() params: { taskId: string; userId: string }) {
    const { taskId, userId } = params;
    return this.taskService.deleteTaskById(taskId, userId);
  }
}
