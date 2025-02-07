import { Module } from '@nestjs/common';
import { CurrencyService } from './currency.service';
import { CurrencyController } from './currency.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { CurrencyLog, CurrencyLogSchema } from './currency.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: CurrencyLog.name, schema: CurrencyLogSchema }])],
  controllers: [CurrencyController],
  providers: [CurrencyService],
})
export class CurrencyModule {}
