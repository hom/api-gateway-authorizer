import serverlessExpress from '@vendia/serverless-express';
import { NestFactory } from '@nestjs/core';
import { Callback, Handler, Context } from 'aws-lambda';
import { AppModule } from './app.module';
export { handler as authorizer } from './auth-guard';
import 'source-map-support/register';

let server: Handler;

async function bootstrap(): Promise<Handler> {
  const app = await NestFactory.create(AppModule, {
    cors: true,
  });
  await app.init();

  const expressApp = app.getHttpAdapter().getInstance();
  return serverlessExpress({ app: expressApp });
}

export const handler: Handler = async (
  event: any,
  context: Context,
  callback: Callback,
) => {
  server = server ?? (await bootstrap());

  return server(event, context, callback);
};
