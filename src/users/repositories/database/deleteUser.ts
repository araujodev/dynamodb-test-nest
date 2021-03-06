import { DeleteCommand, DeleteCommandInput } from '@aws-sdk/lib-dynamodb';
import { ApplicationEnum } from 'src/common/constants/application.enum';
import { DynamoDBUserEnum } from 'src/users/constants/dynamodb.user.enum';
import client from '../../../database/dynamoClient';

const deleteUser = async (id: string) => {
  const deleteUserParams: DeleteCommandInput = {
    TableName: ApplicationEnum.DATABASE_TABLE_NAME,
    Key: {
      PK: DynamoDBUserEnum.PK,
      SK: id,
    },
  };

  const command = new DeleteCommand(deleteUserParams);
  return client.send(command);
};

export default deleteUser;
