import { ApiProperty } from "@nestjs/swagger";

export class UserLogin {
    @ApiProperty({ type: String })
    pw: string;

    @ApiProperty({ type: String })
    email: string;
}