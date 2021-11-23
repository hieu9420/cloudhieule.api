import { ApiProperty } from "@nestjs/swagger";

export class UserLogin {
    @ApiProperty({ type: String })
    email: string;

    @ApiProperty({ type: String })
    password: string;
}