import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type MotelCostDocument = MotelCost & Document;
@Schema({timestamps: true})
export class MotelCost{
  @Prop({required: true})
  motelID: string;

  @Prop()
  description: string;

  @Prop({required: true})
  roomNumber: number;

  @Prop()
  elecOldNumber: number;

  @Prop()
  elecNewNumber: number;

  @Prop()
  elecTotalNumber: number;

  @Prop()
  waterOldNumber: number;

  @Prop()
  waterNewNumber: number;

  @Prop()
  waterTotalNumber: number;

  @Prop({required: true})
  elecTotalCost: number;

  @Prop({required: true})
  waterTotalCost: number;

  @Prop({required: true})
  motelTotalCost: number;
}

export const MotelCostSchema = SchemaFactory.createForClass(MotelCost);