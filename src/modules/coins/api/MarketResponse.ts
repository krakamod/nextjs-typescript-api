import { Mapper } from "@/service/Mapper";
import { Market, MarketFactory, Currency } from "../Coin";

export interface FullMarketResponse {
  id: string;
  symbol: string;
  name: string;
  image: {
    large: string;
  };
  market_data: {
    current_price: {
      usd: number;
    };
    high_24h: {
      usd: number;
    };
    low_24h: {
      usd: number;
    };
    ath: {
      usd: number;
    };
    market_cap: {
      usd: number;
    };
    market_cap_rank: number;
  };
}

export interface MarketResponse {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  high_24h: number;
  low_24h: number;
  ath: number;
  market_cap: number;
  market_cap_rank: number;
}

export const MarketResponseFactory = (
  { currency }: { currency: Currency },
  response: MarketResponse,
): MarketResponse & Mapper<Market> => ({
  ...response,
  format: () => MarketFactory({
    id: response.id,
    name: response.name,
    imageSrc: response.image,
    price: response.current_price,
    high24hPrice: response.high_24h,
    low24hPrice: response.low_24h,
    allTimeHighPrice: response.ath,
    marketCap: response.market_cap,
    marketCapRank: response.market_cap_rank,
    currency,
  }),
});
