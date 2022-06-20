import { GetCommand, GetCommandInput } from '@aws-sdk/lib-dynamodb';
import { ApplicationEnum } from 'src/common/constants/application.enum';
import { DynamoDBUserEnum } from 'src/users/constants/dynamodb.user.enum';
import client from '../../../database/dynamoClient';

const getUser = async (userId: string) => {
  const getUserParams: GetCommandInput = {
    TableName: ApplicationEnum.DATABASE_TABLE_NAME,
    Key: {
      PK: DynamoDBUserEnum.PK,
      SK: userId,
    },
  };
  const command = new GetCommand(getUserParams);
  return await client.send(command);
};

export default getUser;
