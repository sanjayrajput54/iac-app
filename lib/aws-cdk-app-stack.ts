import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
// import * as sqs from 'aws-cdk-lib/aws-sqs';
import { Function, Code, Runtime } from "aws-cdk-lib/aws-lambda";
export class AwsCdkAppStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here

    // example resource
    // const queue = new sqs.Queue(this, 'AwsCdkAppQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });

    const lFunc = new Function(this, "MyFunc", {
      runtime: Runtime.NODEJS_20_X,
      handler: "index.handler",
      code: Code.fromAsset("functions")
    })

  }
}
