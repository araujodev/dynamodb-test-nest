import { PutCommand, PutCommandInput } from '@aws-sdk/lib-dynamodb';
import { ApplicationEnum } from 'src/common/constants/application.enum';
import { DynamoDBTaskEnum } from 'src/tasks/constants/dynamodb.task.enum';
import { Task } from 'src/tasks/models/task.model';
import { DynamoDBUserEnum } from 'src/users/constants/dynamodb.user.enum';
import client from '../../../database/dynamoClient';

const putTask = async (task: Task) => {
  const putTaskParams: PutCommandInput = {
    TableName: ApplicationEnum.DATABASE_TABLE_NAME,
    Item: {
      PK: `${DynamoDBTaskEnum.PK}#${task.id}`,
      SK: `${DynamoDBUserEnum.PK}#${task.userId}`,
      id: task.id,
      description: task.description,
      status: task.status,
      userId: task.userId,
      createdAt: task.createdAt.toString(),
    },
  };
  const command = new PutCommand(putTaskParams);
  return client.send(command);
};

export default putTask;
