import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { SharedModule } from './api/shared.module';
import { GLOBAL } from './contains/variable-contain';


@Module({
  imports: [
    SharedModule,
    MongooseModule.forRoot(GLOBAL.G_MONGODB_PATH,{ useNewUrlParser: true }),
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
