import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { use } from 'passport';
import { Users, UsersDocument } from '../../schema/users.schema';

@Injectable()
export class UsersService {
    constructor(
        @InjectModel(Users.name) private userModel: Model<UsersDocument>
    ){}

    async findOne(email: string): Promise<Users>{
        return this.userModel.findOne({email: email})
    }

    async findByID(idUser: any): Promise<Users>{
        const user = await this.userModel.findOne({_id: idUser}).lean();
        delete user.password;
        return user;
    }
}
