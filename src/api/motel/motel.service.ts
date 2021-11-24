import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MotelCost, MotelCostDocument } from 'src/schema/motel.cost.schema';
import { Motel, MotelDocument } from '../../schema/motel.schema';

@Injectable()
export class MotelService {
    constructor(

        @InjectModel(Motel.name) private motelModel: Model<MotelDocument>,
        @InjectModel(MotelCost.name) private motelCostModel: Model<MotelCostDocument>,

    ){}

    async findAllMotel(){
        return this.motelModel.find().exec();
    }

    async findAllMotelCost(){
        return this.motelCostModel.find().exec();
    }
}
