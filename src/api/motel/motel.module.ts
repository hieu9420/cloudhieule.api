import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtStrategy } from 'src/auth/jwt.strategy';
import { GLOBAL } from 'src/contains/variable-contain';
import { MotelCostSchema } from 'src/schema/motel.cost.schema';
import { MotelSchema } from '../../schema/motel.schema';
import { MotelController } from './motel.controller';
import { MotelService } from './motel.service';


@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Motel', schema: MotelSchema }, ]),
    MongooseModule.forFeature([{ name: 'MotelCost', schema: MotelCostSchema }, ]),
    JwtModule.register({
      secret: GLOBAL.G_JWT_KEY,
      signOptions: { expiresIn: '1d' },
    }),
  ],
  controllers: [MotelController],
  providers: [MotelService, JwtStrategy]
})
export class MotelModule {}
