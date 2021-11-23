import { Module } from '@nestjs/common';
import { LoginModule } from './login/login.module';
import { MotelModule } from './motel/motel.module';
import { UsersModule } from './users/users.module';

const REUSE_LIST = [
    LoginModule,
    MotelModule,
    UsersModule
];
@Module({
    imports: [...REUSE_LIST],
    exports: [...REUSE_LIST]
})
export class SharedModule {

}
