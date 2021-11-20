import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MotelCost, MotelCostDocument } from 'src/schemas/motel.cost.schema';
import { Motel, MotelDocument } from 'src/schemas/motel.schema';

@Injectable()
export class MotelApiService {
    constructor(
        @InjectModel(Motel.name) private motelModel: Model<MotelDocument>,
        @InjectModel(MotelCost.name) private motelCostModel: Model<MotelCostDocument>,
    ){}

    public async getAll(): Promise<MotelCost[]>{
        return this.motelCostModel.find({}).exec();
    }

    public async getMotelData(): Promise<Motel[]>{
        return this.motelModel.find({}).exec();
    }
}
