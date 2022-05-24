import { CreateTableCommand, CreateTableInput } from '@aws-sdk/client-dynamodb';
import client from './dynamoClient';

const userTableParams: CreateTableInput = {
  TableName: 'Users',
  KeySchema: [
    { AttributeName: 'PK', KeyType: 'HASH' },
    { AttributeName: 'SK', KeyType: 'RANGE' },
  ],
  AttributeDefinitions: [
    { AttributeName: 'PK', AttributeType: 'S' },
    { AttributeName: 'SK', AttributeType: 'S' },
  ],
  ProvisionedThroughput: {
    ReadCapacityUnits: 2,
    WriteCapacityUnits: 2,
  },
};

const command = new CreateTableCommand(userTableParams);

client
  .send(command)
  .then((r) => {
    console.log(r);
  })
  .catch((e) => {
    console.log('error', e);
  });
