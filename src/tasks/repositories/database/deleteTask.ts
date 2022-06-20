import { DeleteCommand, DeleteCommandInput } from '@aws-sdk/lib-dynamodb';
import { ApplicationEnum } from 'src/common/constants/application.enum';
import { DynamoDBTaskEnum } from 'src/tasks/constants/dynamodb.task.enum';
import { DynamoDBUserEnum } from 'src/users/constants/dynamodb.user.enum';
import client from '../../../database/dynamoClient';

const deleteTask = async (taskId: string, userId: string) => {
  const deleteTaskParams: DeleteCommandInput = {
    TableName: ApplicationEnum.DATABASE_TABLE_NAME,
    Key: {
      PK: `${DynamoDBTaskEnum.PK}#${taskId}`,
      SK: `${DynamoDBUserEnum.PK}#${userId}`,
    },
  };

  const command = new DeleteCommand(deleteTaskParams);
  return client.send(command);
};

export default deleteTask;
