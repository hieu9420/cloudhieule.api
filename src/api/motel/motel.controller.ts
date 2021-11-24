import { Controller, Get, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { MotelService } from './motel.service';

@Controller('motel')
export class MotelController {
    constructor(

        private readonly motelService: MotelService

    ){}

    @ApiTags('Motel Api')
    @UseGuards(JwtAuthGuard)
    @ApiBearerAuth()
    @Get('getmotel')
    async getMotel(){
        return this.motelService.findAllMotel();
    }

    @ApiTags('Motel Api')
    @UseGuards(JwtAuthGuard)
    @ApiBearerAuth()
    @Get('getmotelcost')
    async getMotelCost(){
        return this.motelService.findAllMotelCost();
    }
}
