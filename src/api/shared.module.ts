import { Module } from '@nestjs/common';
import { MotelApiModule } from './motel-api/motel-api.module';
import { UsersModule } from './users/users.module';
import { ProfileModule } from './profile/profile.module';
import { AuthModule } from './auth/auth.module';

const REUSE_LIST = [
    MotelApiModule,
    UsersModule,
    AuthModule,
    ProfileModule,


];

@Module({
    imports: [...REUSE_LIST],
    exports: [...REUSE_LIST]
})
export class SharedModule {}
