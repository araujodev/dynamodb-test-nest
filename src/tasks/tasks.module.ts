import { Module } from '@nestjs/common';
import { TasksController } from './controllers/tasks.controller';
import { TaskRepository } from './repositories/task.repositories';
import { TasksService } from './services/tasks.service';

@Module({
  providers: [TasksService, TaskRepository],
  controllers: [TasksController],
})
export class TasksModule {}
