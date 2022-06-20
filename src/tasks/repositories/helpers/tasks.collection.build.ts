import { Task } from 'src/tasks/models/task.model';

const buildTasks = (items: any[]) => {
  const taskCollection = items.map((item) => {
    console.log(item);
    const task = new Task();
    task.id = item.id.S;
    task.description = item.description.S;
    task.status = item.status.S;
    task.userId = item.userId.S;
    task.createdAt = new Date(item.createdAt.S);
    return task;
  });

  return taskCollection;
};

export default buildTasks;
