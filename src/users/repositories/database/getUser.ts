import { GetCommand, GetCommandInput } from '@aws-sdk/lib-dynamodb';
import { User } from '../../models/user.model';
import client from '../../../database/dynamoClient';

const getUser = async (user: User) => {
  const getUserParams: GetCommandInput = {
    TableName: 'Users',
    Key: {
      PK: 'USERS',
      SK: user.id,
    },
  };
  const command = new GetCommand(getUserParams);
  return await client.send(command);
};

export default getUser;
