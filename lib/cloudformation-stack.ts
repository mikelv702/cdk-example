import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
// import * as sqs from 'aws-cdk-lib/aws-sqs';
import { LambdaLayerStack } from './lambda';

export class CloudformationStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    const app = new cdk.App();
    new LambdaLayerStack(app, 'ExampleLambdaStack')
    // The code that defines your stack goes here

    // example resource
    // const queue = new sqs.Queue(this, 'CloudformationQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });
  }
}
