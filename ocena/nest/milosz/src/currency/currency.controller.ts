import { Controller, Get, Query } from '@nestjs/common';
import { ApiTags, ApiQuery } from '@nestjs/swagger';
import { CurrencyService } from './currency.service';

@ApiTags('Currency')
@Controller('convert-currency')
export class CurrencyController {
  constructor(private readonly currencyService: CurrencyService) {}

  @Get()
  @ApiQuery({ name: 'amountPLN', type: Number, description: 'Kwota w PLN' })
  async convert(@Query('amountPLN') amountPLN: number) {
    return { amountEUR: await this.currencyService.convertCurrency(amountPLN) };
  }
}

