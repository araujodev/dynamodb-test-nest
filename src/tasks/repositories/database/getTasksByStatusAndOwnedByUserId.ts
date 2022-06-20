import { QueryCommand, QueryInput } from '@aws-sdk/client-dynamodb';
import { ApplicationEnum } from 'src/common/constants/application.enum';
import { DynamoDBUserEnum } from 'src/users/constants/dynamodb.user.enum';
import client from '../../../database/dynamoClient';

const getTasksByStatusAndOwnedByUserId = async (
  status: string,
  userId: string,
) => {
  const params: QueryInput = {
    ExpressionAttributeNames: {
      '#SK': 'SK',
      '#STATUS': 'status',
    },
    ExpressionAttributeValues: {
      ':sk': { S: `${DynamoDBUserEnum.PK}#${userId}` },
      ':status': { S: status },
    },
    IndexName: 'GSI-1',
    KeyConditionExpression: '#SK = :sk and #STATUS = :status',
    TableName: ApplicationEnum.DATABASE_TABLE_NAME,
  };
  const command = new QueryCommand(params);
  return await client.send(command);
};

export default getTasksByStatusAndOwnedByUserId;
