import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from 'src/schemas/user.schema';
import { UserRegister } from '../../dto/user.register.dto';

@Injectable()
export class UsersService {

    constructor(

        @InjectModel(User.name) private userModel: Model<UserDocument>,
    ){}

    public async findOne(user: UserRegister): Promise<User | undefined> {
        return this.userModel.findOne({userName : user.userName, pw: user.pw}).exec();
    }
}
