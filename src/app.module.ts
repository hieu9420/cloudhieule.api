import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SharedModule } from './api/shared.module';

import * as dotenv from 'dotenv';

dotenv.config();

const MONGODB_PATH = 'mongodb+srv://'+ process.env.MONGO_USERNAME +':'+ process.env.MONGO_PW +'@cluster0.wrcgf.mongodb.net/'+ process.env.MONGO_DB +'?retryWrites=true&w=majority';

@Module({
  imports: [SharedModule,
    MongooseModule.forRoot(MONGODB_PATH,{ useNewUrlParser: true })],
})
export class AppModule {}
