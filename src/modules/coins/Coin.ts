export enum Currency {
  USD = "USD"
}

export interface Coin {
  id: string;
  name: string;
}

export interface Market extends Coin {
  imageSrc: string;
  price: number;
  high24hPrice: number;
  low24hPrice: number;
  allTimeHighPrice: number;
  marketCap: number;
  marketCapRank: number;
  currency: Currency;
}

// Here can be added methods related to market
export const MarketFactory = (rawMarket: Market): Market => rawMarket;
