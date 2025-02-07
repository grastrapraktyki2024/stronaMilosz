import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class CurrencyLog {
  @Prop()
  date: Date;

  @Prop()
  amountPLN: number;

  @Prop()
  amountEUR: number;
}

export type CurrencyLogDocument = CurrencyLog & Document;
export const CurrencyLogSchema = SchemaFactory.createForClass(CurrencyLog);


