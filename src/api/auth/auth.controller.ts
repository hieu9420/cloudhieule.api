import { BadRequestException, Body, Controller, Get, Post, Res } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import * as bcrypt from 'bcrypt';
import { Response } from 'express';
import { UserLogin } from 'src/dto/user.login.dto';
import { UserRegister } from 'src/dto/user.register.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {

    constructor(
        private readonly authService: AuthService,
        private jwtService: JwtService
    ){}

    @Post('register')
    @ApiTags('Auth')
    async register(@Body() userRegisterModel: UserRegister){
        const hashedPassword = await bcrypt.hash(userRegisterModel.pw, 10);
        const user = await this.authService.create(userRegisterModel.userName, userRegisterModel.email, hashedPassword);

        delete user.pw;
        return user;
    }

    @Post('login')
    @ApiTags('Auth')
    @ApiOkResponse({ description: 'Login Success!'})
    async login(
        @Body() userLoginModel: UserLogin,
        @Res({passthrough: true}) response: Response
    ){
        const user = await this.authService.findOne(userLoginModel.email);

        if(!user){
            throw new BadRequestException('Invalid Email Or PassWord');
        }

        if(!await bcrypt.compare(userLoginModel.pw, user.pw)){
            throw new BadRequestException('Invalid Email Or PassWord');
        }

        const jwt = await this.jwtService.sign({id: user._id});

        response.cookie('jwt', jwt, {httpOnly: true});

        return {
            message: 'Login Success!'
        };
    }

    @Post('logout')
    @ApiTags('Auth')
    @ApiOkResponse({ description: 'Logout Success!'})
    async logout(@Res({passthrough: true}) response: Response){
        response.clearCookie('jwt');
        return{
            message: 'Logout Success!'
        }
    }
}
