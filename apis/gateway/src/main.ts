import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { AppModule } from './app/app.module';
import { ConfigService } from '@nestjs/config';

// import { Logger } from '@nestjs/common';
// import { NestFactory } from '@nestjs/core';
// // import { Transport, MicroserviceOptions } from '@nestjs/microservices';
// import { ConfigService } from '@nestjs/config';
// import { AppModule } from './app/app.module';

// async function bootstrap() {
//   const app = await NestFactory.create(AppModule);
//   await app.listen(3000);
// }
// bootstrap();

// async function bootstrap() {
//   const app = await NestFactory.create(AppModule);
//   const configService = app.get(ConfigService);
//   await app.listen(configService.get('PORT') || 4000);
// }
// bootstrap();

// async function bootstrap() {

//   const appConfig = config().app;
//   const host = appConfig.host;
//   const port = appConfig.port;

//   const app = await NestFactory.createMicroservice<MicroserviceOptions>(
//     AppModule,
//     {
//       transport: Transport.KAFKA,
//       options: {
//         client: {
//           brokers: ['localhost:9092'],
//         },
//       },
//     },
//   );

//   const configService = app.get(ConfigService);
//   await app.listen(port || 4000);

//   // await app.listen();
// }
// bootstrap();

async function bootstrap() {
  const logger = new Logger('main');
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const KAFKA_HOST = configService.get<string>('KAFKA_HOST');
  const KAFKA_PORT = configService.get<number>('KAFKA_PORT');
  const microserviceOptions = {
    transport: Transport.KAFKA,
    options: {
      client: {
        brokers: [`${KAFKA_HOST}:${KAFKA_PORT}`],
      },
    },
  };
  app.connectMicroservice(microserviceOptions);
  const PORT = configService.get<number>('PORT');
  const ENVIRONMENT = configService.get<string>('NODE_ENV');
  const title = configService.get<string>('ENVIRONMENT_TITLE');
  await app.listen(PORT);
  logger.log(
    `${ENVIRONMENT}, ready to receive Kafka messages in PORT - ${PORT}\n Environment - ${title}`,
  );
}
bootstrap();
