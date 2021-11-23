import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Document, SchemaTypes, Types } from 'mongoose';

export type MotelDocument = Motel & Document;
@Schema({timestamps: true})
export class Motel{

  @Prop({type: SchemaTypes.ObjectId })
  @ApiPropertyOptional({ type: SchemaTypes.ObjectId })
  _id: Types.ObjectId;
    
  @Prop({required: true})
  @ApiProperty({ type: String })
  motelName: string;

  @Prop({required: true})
  @ApiProperty({ type: String })
  motelBasicCost: number;

  @Prop({required: true})
  trashCost: number;

  @Prop({required: true})
  elecEachCost: number;

  @Prop({required: true})
  waterEachCost: number;
}

export const MotelSchema = SchemaFactory.createForClass(Motel);