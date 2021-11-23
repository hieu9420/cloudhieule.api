import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/api/users/users.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService
    ){}

    async validateUser(email: string, password: string): Promise<any>{
        const user = await this.usersService.findOne(email);
        if(!user){
            return new Error('Can not find User');
        }
        if(await bcrypt.compare(password, user.password)){
            const { password, ...result } = user;
            return result;
        }
        return null;
    }

    async login(user: any) {
        const payload = { username: user.username, sub: user._id };
        return {
          token: this.jwtService.sign(payload),
        };
    }
}
