import { PutCommand, PutCommandInput } from '@aws-sdk/lib-dynamodb';
import client from '../../../database/dynamoClient';
import { User } from '../../models/user.model';

const putUser = async (user: User) => {
  const putUserParams: PutCommandInput = {
    TableName: 'Users',
    Item: {
      PK: 'USERS',
      SK: user.id,
      name: user.name,
      lastName: user.lastName,
      age: user.age,
      email: user.email,
    },
  };
  const command = new PutCommand(putUserParams);
  return client.send(command);
};

export default putUser;
