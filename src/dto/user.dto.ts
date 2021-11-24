import { ApiProperty } from "@nestjs/swagger";

export class UserLogin {
    @ApiProperty({ type: String })
    email: string;

    @ApiProperty({ type: String })
    password: string;
}

export class UserRegister {
    @ApiProperty({ type: String })
    userName: string;

    @ApiProperty({ type: String })
    pw: string;

    @ApiProperty({ type: String })
    email: string;
}