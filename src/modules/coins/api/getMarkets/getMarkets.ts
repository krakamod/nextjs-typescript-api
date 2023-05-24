import { HttpInstance } from "@/http/HttpInstance";
import { type Currency, type Market } from "../../Coin";
import { 
  type MarketResponse,
  MarketResponseFactory,
} from "../MarketResponse";

const CHUNK_SIZE = 45;

const getMarkets = async (
  http: HttpInstance,
  currency: Currency,
): Promise<Market[]> => {
  const { data } = await http.get<MarketResponse[]>("/coins/markets", {
    params: {
      vs_currency: currency,
      order: "market_cap_desc",
      per_page: CHUNK_SIZE,
      page: 1,
      sparkline: false,
      locale: "en",
    },
  });
  return data.map((item) => MarketResponseFactory({ currency }, item).format());
};

export default getMarkets;
