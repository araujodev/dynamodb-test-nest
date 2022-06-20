import { QueryCommand, QueryInput } from '@aws-sdk/client-dynamodb';
import { ApplicationEnum } from 'src/common/constants/application.enum';
import { DynamoDBTaskEnum } from 'src/tasks/constants/dynamodb.task.enum';
import { DynamoDBUserEnum } from 'src/users/constants/dynamodb.user.enum';
import client from '../../../database/dynamoClient';

const getAllTasksOwnedByUserId = async (userId: string) => {
  const params: QueryInput = {
    ExpressionAttributeNames: {
      '#SK': 'SK',
      '#PK': 'PK',
    },
    ExpressionAttributeValues: {
      ':sk': { S: `${DynamoDBUserEnum.PK}#${userId}` },
      ':pk': { S: DynamoDBTaskEnum.PK },
    },
    IndexName: 'GSI-2',
    KeyConditionExpression: '#SK = :sk and begins_with(#PK, :pk)',
    TableName: ApplicationEnum.DATABASE_TABLE_NAME,
  };
  const command = new QueryCommand(params);
  return await client.send(command);
};

export default getAllTasksOwnedByUserId;
