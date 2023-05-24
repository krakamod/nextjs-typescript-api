import { HttpInstance } from "@/http/HttpInstance";
import { type Currency, type Market } from "../../Coin";
import { 
  type FullMarketResponse,
  MarketResponseFactory,
} from "../MarketResponse";

const getMarket = async (
  http: HttpInstance,
  id: string,
  currency: Currency,
): Promise<Market> => {
  const { data } = await http.get<FullMarketResponse>(`/coins/${id}`, {
    params: {
      localization: false,
      tickers: false,
      community_data: false,
      developer_data: false,
      sparkline: false,
    },
  });
  return MarketResponseFactory({ currency }, {
    id: data.id,
    name: data.name,
    image: data.image.large,
    symbol: data.symbol,
    current_price: data.market_data.current_price.usd,
    high_24h: data.market_data.high_24h.usd,
    low_24h: data.market_data.low_24h.usd,
    ath: data.market_data.ath.usd,
    market_cap: data.market_data.market_cap.usd,
    market_cap_rank: data.market_data.market_cap_rank,
  }).format();
};

export default getMarket;
