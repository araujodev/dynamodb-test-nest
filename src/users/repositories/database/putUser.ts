import { PutCommand, PutCommandInput } from '@aws-sdk/lib-dynamodb';
import { ApplicationEnum } from 'src/common/constants/application.enum';
import { DynamoDBUserEnum } from 'src/users/constants/dynamodb.user.enum';
import client from '../../../database/dynamoClient';
import { User } from '../../models/user.model';

const putUser = async (user: User) => {
  const putUserParams: PutCommandInput = {
    TableName: ApplicationEnum.DATABASE_TABLE_NAME,
    Item: {
      PK: DynamoDBUserEnum.PK,
      SK: user.id,
      id: user.id,
      name: user.name,
      lastName: user.lastName,
      age: user.age,
      email: user.email,
      createdAt: user.createdAt.toString(),
    },
  };
  const command = new PutCommand(putUserParams);
  return client.send(command);
};

export default putUser;
