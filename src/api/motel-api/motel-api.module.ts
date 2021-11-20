import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { MotelCostSchema } from 'src/schemas/motel.cost.schema';
import { MotelSchema } from 'src/schemas/motel.schema';
import { MotelApiController } from './motel-api.controller';
import { MotelApiService } from './motel-api.service';

import * as dotenv from 'dotenv';
dotenv.config();

const jwtSecret = process.env.JWT_KEY;

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Motel', schema: MotelSchema }, ]),
    MongooseModule.forFeature([{ name: 'MotelCost', schema: MotelCostSchema }, ]),
    JwtModule.register({
      secret: jwtSecret,
      signOptions: { expiresIn: '1d' },
    }),
  ],
  controllers: [MotelApiController],
  providers: [MotelApiService]
})
export class MotelApiModule {}
