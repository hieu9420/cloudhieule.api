import { Controller, Post, UseGuards, Body, Request, UnauthorizedException } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthService } from 'src/auth/auth.service';
import { LocalAuthGuard } from 'src/auth/local-auth.guard';
import { UserLogin } from 'src/dto/user.dto';

@Controller('login')
export class LoginController {

    constructor(
        private authService: AuthService
    ){}

    // @UseGuards(LocalAuthGuard)
    // @ApiTags('Auth')
    // @Post()
    // async login(@Body() userLoginModel: UserLogin) {
    //     console.log(userLoginModel)
    //     return this.authService.login(userLoginModel);
    // }

    @UseGuards(LocalAuthGuard)
    @ApiTags('Auth')
    @Post()
    async login(@Request() req) {
        return this.authService.login(req.user);
    }
}
