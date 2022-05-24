import { GetCommand, GetCommandInput } from '@aws-sdk/lib-dynamodb';
import client from '../../../database/dynamoClient';

const getUser = async (userId: string) => {
  const getUserParams: GetCommandInput = {
    TableName: 'Users',
    Key: {
      PK: 'USERS',
      SK: userId,
    },
  };
  const command = new GetCommand(getUserParams);
  return await client.send(command);
};

export default getUser;
