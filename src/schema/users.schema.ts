import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Document, SchemaTypes, Types } from 'mongoose';

export type UsersDocument = Users & Document;
@Schema({timestamps: true})
export class Users{
  @Prop({type: SchemaTypes.ObjectId })
  @ApiPropertyOptional({ type: Types.ObjectId })
  _id: Types.ObjectId;

  @Prop({required: true, trim: true})
  @ApiProperty({ type: String })
  username: string;

  @Prop({required: true, trim: true, unique: true, lowercase: true})
  @ApiProperty({ type: String })
  email: string;

  @Prop({required: true})
  @ApiProperty({ type: String })
  password: string;

}

export const UsersSchema = SchemaFactory.createForClass(Users);