import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Users, UsersDocument } from '../../schema/users.schema';

@Injectable()
export class UsersService {
    constructor(
        @InjectModel(Users.name) private userModel: Model<UsersDocument>
    ){}

    async findOne(username: string): Promise<Users>{
        return this.userModel.findOne({username: username})
    }
}
