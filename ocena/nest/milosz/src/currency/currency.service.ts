import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CurrencyLog, CurrencyLogDocument } from './currency.schema';

@Injectable()
export class CurrencyService {
  private readonly exchangeRate = 4.2; // 1 EUR = 4.2 PLN

  constructor(
    @InjectModel(CurrencyLog.name) private currencyLogModel: Model<CurrencyLogDocument>,
  ) {}

  async convertCurrency(amountPLN: number): Promise<number> {
    const amountEUR = amountPLN / this.exchangeRate;
    await this.currencyLogModel.create({
      date: new Date(),
      amountPLN,
      amountEUR,
    });
    return amountEUR;
  }
}
