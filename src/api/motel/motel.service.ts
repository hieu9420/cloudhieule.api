import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Motel, MotelDocument } from '../../schema/motel.schema';

@Injectable()
export class MotelService {
    constructor(

        @InjectModel(Motel.name) private motelModel: Model<MotelDocument>,

    ){}

    async findAll(){
        return this.motelModel.find().exec();
    }
}
