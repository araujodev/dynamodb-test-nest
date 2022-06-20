import {
  QueryCommand,
  QueryCommandInput,
  QueryCommandOutput,
} from '@aws-sdk/lib-dynamodb';
import { ApplicationEnum } from 'src/common/constants/application.enum';
import { DynamoDBTaskEnum } from 'src/tasks/constants/dynamodb.task.enum';
import client from '../../../database/dynamoClient';

const getTask = async (taskId: string): Promise<QueryCommandOutput> => {
  const params: QueryCommandInput = {
    TableName: ApplicationEnum.DATABASE_TABLE_NAME,
    ExpressionAttributeNames: {
      '#pk': 'PK',
      '#id': 'id',
    },
    ExpressionAttributeValues: {
      ':taskId': `${DynamoDBTaskEnum.PK}#${taskId}`,
      ':id': taskId,
    },
    KeyConditionExpression: '#pk = :taskId',
    FilterExpression: '#id = :id',
  };
  const command = new QueryCommand(params);
  return await client.send(command);
};

export default getTask;
