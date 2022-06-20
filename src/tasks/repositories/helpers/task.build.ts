import { Task } from 'src/tasks/models/task.model';

const buildOneTask = (items: any) => {
  const item = items[0];
  const task = new Task();
  task.id = item.id;
  task.createdAt = new Date(item.createdAt);
  task.description = item.description;
  task.userId = item.userId;
  task.status = item.status;
  return task;
};

export default buildOneTask;
