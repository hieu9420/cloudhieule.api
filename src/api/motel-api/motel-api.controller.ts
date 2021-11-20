import { Controller, Get, Req, UnauthorizedException } from '@nestjs/common';
import { ApiNotFoundResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { MotelCost } from 'src/schemas/motel.cost.schema';
import { Motel } from 'src/schemas/motel.schema';
import { MotelApiService } from './motel-api.service';
import { Request } from 'express';
import { JwtService } from '@nestjs/jwt';

@Controller('motel')
export class MotelApiController {
    constructor(
        private motelApiService: MotelApiService,
        private jwtService: JwtService
    ){}

    motelData: Motel[];
    motelCostData: MotelCost[];

    @Get('/GetAllMotelCost')
    @ApiTags('Get All Motel Cost Api')
    @ApiOkResponse({ description: 'Get All Motel Data Successfully.'})
    @ApiNotFoundResponse({ description: 'Get Not Found.' })
    async getAllMotelCost(@Req() request: Request){
        try{
            const cookie = request.cookies['jwt'];

            const data = await this.jwtService.verifyAsync(cookie);

            if(!data){
                throw new UnauthorizedException();
            }
    
            this.motelCostData = await this.motelApiService.getAll();
            return {
                motelCostData: this.motelCostData
            }
        }
        catch(e){
            throw new UnauthorizedException();
        }
        
    }

    @Get('/GetAllMotel')
    @ApiTags('Get All Motel Api')
    @ApiOkResponse({ description: 'Get All Motel Data Successfully.'})
    @ApiNotFoundResponse({ description: 'Get Not Found.' })
    async getAllMotel(){
        this.motelData = await this.motelApiService.getMotelData();
        return {
            motelData: this.motelData,
        }
    }
}
