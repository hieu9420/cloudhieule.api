import { Controller, Post, UseGuards, Request, Body } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthService } from 'src/auth/auth.service';
import { LocalAuthGuard } from 'src/auth/local-auth.guard';
import { UserLogin } from 'src/dto/user.login.dto';

@Controller('login')
export class LoginController {

    constructor(
        private authService: AuthService
    ){}

    @UseGuards(LocalAuthGuard)
    @ApiTags('Auth')
    @Post()
    async login(@Body() userLoginModel: UserLogin) {
        return this.authService.login(userLoginModel);
    }
}
