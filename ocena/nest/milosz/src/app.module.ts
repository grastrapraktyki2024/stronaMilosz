import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CurrencyModule } from './currency/currency.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/currencyDB'),
    CurrencyModule,
  ],
})
export class AppModule {}
