import { QueryCommand } from '@aws-sdk/client-dynamodb';
import { QueryCommandInput } from '@aws-sdk/lib-dynamodb';
import { ApplicationEnum } from 'src/common/constants/application.enum';
import { DynamoDBUserEnum } from 'src/users/constants/dynamodb.user.enum';
import client from '../../../database/dynamoClient';

const getAllUsers = async () => {
  const getUserParams: QueryCommandInput = {
    TableName: ApplicationEnum.DATABASE_TABLE_NAME,
    KeyConditionExpression: 'PK = :partitionKey',
    ExpressionAttributeValues: {
      ':partitionKey': { S: DynamoDBUserEnum.PK },
    },
  };
  const command = new QueryCommand(getUserParams);
  return await client.send(command);
};

export default getAllUsers;
