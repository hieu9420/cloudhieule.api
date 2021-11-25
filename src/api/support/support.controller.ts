import { Controller, Get, UseGuards, Request, Response } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { UsersService } from '../users/users.service';

@Controller('support')
export class SupportController {
    constructor(
        private usersService: UsersService,
    ){}

    @ApiTags('Support Api')
    @UseGuards(JwtAuthGuard)
    @ApiBearerAuth()
    @Get('getuserdata')
    async getUserData(@Request() req){
        return await this.usersService.findByID(req.user._id);
    }
}
