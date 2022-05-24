import { DeleteCommand, DeleteCommandInput } from '@aws-sdk/lib-dynamodb';
import client from '../../../database/dynamoClient';

const deleteUser = async (id: string) => {
  const deleteUserParams: DeleteCommandInput = {
    TableName: 'Users',
    Key: {
      PK: 'USERS',
      SK: id,
    },
  };

  const command = new DeleteCommand(deleteUserParams);
  return client.send(command);
};

export default deleteUser;
