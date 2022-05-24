import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient } from '@aws-sdk/lib-dynamodb';

const dynamoClient = new DynamoDBClient({
  region: 'us-east-2',
  endpoint: 'http://app-dynamodb:8000',
  credentials: {
    accessKeyId: 'test',
    secretAccessKey: 'test2',
  },
});

const marshallOptions = {
  convertEmptyValues: false,
  removeUndefinedValues: true,
  convertClassInstanceToMap: false,
};

const unmarshallOptions = {
  wrapNumbers: false,
};

const translateConfig = { marshallOptions, unmarshallOptions };

const docClient = DynamoDBDocumentClient.from(dynamoClient, translateConfig);

export default docClient;
