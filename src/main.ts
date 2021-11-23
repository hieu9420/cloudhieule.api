import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';
import { GLOBAL } from './contains/variable-contain';
//process.env.WHITE_LIST
// const whiteList = ['http://localhost:3000', 'http://localhost:3004', 'http://localhost:3007', 'http://localhost:3008'];
// const corsOptions = {
//   origin: (origin, callback) => {
//     if (whiteList.indexOf(origin) !== -1){
//       callback(null, true);
//     }
//     else
//     {
//       callback(new Error('Not allowed by Cors'));
//     }
//   },
//   credentials: true,
// }

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.use(cookieParser());
  
  
  app.enableCors({
    origin: 'http://localhost:3000',
    credentials: true
  });

  const config = new DocumentBuilder()
  .setTitle('CloudHieuLe API')
  .setDescription('CloudHieuLe API')
  .setVersion('1.0')
  .addBearerAuth(
    { type: 'http', scheme: 'bearer', bearerFormat: 'JWT' },
    'token',
  )
  .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(GLOBAL.G_PORT);
}
bootstrap();

