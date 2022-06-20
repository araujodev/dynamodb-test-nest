import {
  CreateTableCommand,
  CreateTableInput,
  GlobalSecondaryIndex,
} from '@aws-sdk/client-dynamodb';
import { ApplicationEnum } from 'src/common/constants/application.enum';
import client from './dynamoClient';

const dynamoTableParams: CreateTableInput = {
  TableName: ApplicationEnum.DATABASE_TABLE_NAME,
  KeySchema: [
    { AttributeName: 'PK', KeyType: 'HASH' },
    { AttributeName: 'SK', KeyType: 'RANGE' },
  ],
  AttributeDefinitions: [
    { AttributeName: 'PK', AttributeType: 'S' },
    { AttributeName: 'SK', AttributeType: 'S' },
    { AttributeName: 'status', AttributeType: 'S' },
  ],
  ProvisionedThroughput: {
    ReadCapacityUnits: 2,
    WriteCapacityUnits: 2,
  },
  GlobalSecondaryIndexes: [
    {
      IndexName: 'GSI-1',
      KeySchema: [
        { AttributeName: 'SK', KeyType: 'HASH' },
        { AttributeName: 'status', KeyType: 'RANGE' },
      ],
      Projection: {
        ProjectionType: 'ALL',
      },
      ProvisionedThroughput: {
        ReadCapacityUnits: 2,
        WriteCapacityUnits: 2,
      },
    } as GlobalSecondaryIndex,
    {
      IndexName: 'GSI-2',
      KeySchema: [
        { AttributeName: 'SK', KeyType: 'HASH' },
        { AttributeName: 'PK', KeyType: 'RANGE' },
      ],
      Projection: {
        ProjectionType: 'ALL',
      },
      ProvisionedThroughput: {
        ReadCapacityUnits: 2,
        WriteCapacityUnits: 2,
      },
    } as GlobalSecondaryIndex,
  ],
};

const command = new CreateTableCommand(dynamoTableParams);

client
  .send(command)
  .then((r) => {
    console.log(r);
  })
  .catch((e) => {
    console.log('error', e);
  });
