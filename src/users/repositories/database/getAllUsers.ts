import { QueryCommand } from '@aws-sdk/client-dynamodb';
import { QueryCommandInput } from '@aws-sdk/lib-dynamodb';
import client from '../../../database/dynamoClient';

const getAllUsers = async () => {
  const getUserParams: QueryCommandInput = {
    TableName: 'Users',
    KeyConditionExpression: 'PK = :table',
    ExpressionAttributeValues: {
      ':table': { S: 'USERS' },
    },
  };
  const command = new QueryCommand(getUserParams);
  return await client.send(command);
};

export default getAllUsers;
