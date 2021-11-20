import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { ObjectUnsubscribedError } from 'rxjs';
import { User, UserDocument } from '../../schemas/user.schema';

@Injectable()
export class AuthService {

    constructor(
        @InjectModel(User.name) private userModel: Model<UserDocument>
    ){}
    

    async create(userName, email, pw): Promise<User> {
        const createdUser = new this.userModel({
            _id: new Types.ObjectId(),
            userName: userName,
            pw: pw,
            email: email
        });

        return createdUser.save();
    }

    async findOne(email): Promise<User>{
        return this.userModel.findOne({email: email});
    }
}
