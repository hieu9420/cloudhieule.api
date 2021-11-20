import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from 'src/schemas/user.schema';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

import * as dotenv from 'dotenv';
dotenv.config();

const jwtSecret = process.env.JWT_KEY;

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }, ]),
    JwtModule.register({
      secret: jwtSecret,
      signOptions: { expiresIn: '1d' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule {}
