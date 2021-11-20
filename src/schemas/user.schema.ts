import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Document, SchemaTypes, Types } from 'mongoose';

export type UserDocument = User & Document;
@Schema({timestamps: true})
export class User{
  @Prop({type: SchemaTypes.ObjectId })
  @ApiPropertyOptional({ type: Types.ObjectId })
  _id: Types.ObjectId;

  @Prop()
  @ApiProperty({ type: Number })
  level: number;

  @Prop()
  @ApiProperty({ type: String, required: false })
  adminKey: string;

  @Prop({required: true, trim: true})
  @ApiProperty({ type: String })
  userName: string;

  @Prop({required: true, trim: true, unique: true, lowercase: true})
  @ApiProperty({ type: String })
  email: string;

  @Prop({required: true})
  @ApiProperty({ type: String })
  pw: string;

}

export const UserSchema = SchemaFactory.createForClass(User);