import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';

import * as dotenv from 'dotenv';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

dotenv.config();

const PORT = process.env.PORT || 3003;

const ORIGIN_WEB = process.env.ORIGIN_WEB;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cookieParser());
  app.enableCors({
    origin: ORIGIN_WEB,
    credentials: true
  });
  const config = new DocumentBuilder()
    .setTitle('CloudHieuLe API')
    .setDescription('CloudHieuLe API')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);


  await app.listen(PORT);
  
}
bootstrap();
